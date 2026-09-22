import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve(process.cwd(), 'out');

if (fs.existsSync(outDir)) {
  try {
    // Ensure permissions are writable before cleaning old export
    function makeWritable(dir) {
      try {
        fs.chmodSync(dir, 0o777);
      } catch {}
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        try {
          fs.chmodSync(fullPath, 0o777);
        } catch {}
        if (entry.isDirectory()) {
          makeWritable(fullPath);
        }
      }
    }
    makeWritable(outDir);
    fs.rmSync(outDir, { recursive: true, force: true });
  } catch {
    // Continue even if out folder cleanup had minor permission hiccup
  }
}
