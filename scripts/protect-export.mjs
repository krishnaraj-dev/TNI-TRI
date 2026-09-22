import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.log('[Export Security] Notice: "out" folder does not exist, skipping post-export hardening.');
  process.exit(0);
}

let removedMapsCount = 0;
let securedFilesCount = 0;

function walkAndSecure(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walkAndSecure(fullPath);
      try {
        // Directory read & execute only (no write)
        fs.chmodSync(fullPath, 0o555);
      } catch {
        // Fallback for environments without POSIX chmod
      }
    } else {
      // 1. Purge any potential map or build-info files
      if (entry.name.endsWith('.map') || entry.name.endsWith('.tsbuildinfo') || entry.name.endsWith('.d.ts')) {
        try {
          fs.unlinkSync(fullPath);
          removedMapsCount++;
        } catch {
          // ignore
        }
      } else {
        // 2. Strip any lingering sourceMappingURL references in JS/CSS
        if (entry.name.endsWith('.js') || entry.name.endsWith('.css') || entry.name.endsWith('.html')) {
          try {
            let content = fs.readFileSync(fullPath, 'utf8');
            let updated = false;

            if (content.includes('sourceMappingURL=')) {
              content = content.replace(/\/\/#\s*sourceMappingURL=[^\s]*/g, '');
              content = content.replace(/\/\*#\s*sourceMappingURL=[^\s]*\s*\*\//g, '');
              updated = true;
            }

            if (updated) {
              fs.writeFileSync(fullPath, content, 'utf8');
            }
          } catch {
            // ignore
          }
        }

        // 3. Mark file as read-only (no write permissions: 0o444)
        try {
          fs.chmodSync(fullPath, 0o444);
        } catch {
          // Fallback for environments without POSIX chmod
        }

        securedFilesCount++;
      }
    }
  }
}

walkAndSecure(outDir);

console.log(`[Export Security] ✓ Source maps strictly disabled (purged: ${removedMapsCount})`);
console.log(`[Export Security] ✓ Out folder protected: ${securedFilesCount} files marked read-only and code-tamper resistant`);
