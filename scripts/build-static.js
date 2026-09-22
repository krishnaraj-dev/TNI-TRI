const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const apiDir = path.join(rootDir, 'app', 'api');
const tempApiDir = path.join(rootDir, 'app', '_api_temp');

let moved = false;

try {
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, tempApiDir);
    moved = true;
  }

  process.env.NODE_ENV = 'production';
  process.env.NEXT_EXPORT = 'true';

  const isWin = process.platform === 'win32';
  const npxCmd = isWin ? 'npx.cmd' : 'npx';

  const result = spawnSync(npxCmd, ['next', 'build'], {
    stdio: 'inherit',
    cwd: rootDir,
    env: {
      ...process.env,
      NODE_ENV: 'production',
      NEXT_EXPORT: 'true',
    },
    shell: true,
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
} finally {
  if (moved && fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir);
  }
}
