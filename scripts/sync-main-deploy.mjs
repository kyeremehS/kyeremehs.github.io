import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'dist');
const rootAssetsDir = path.join(rootDir, 'assets');
const distAssetsDir = path.join(distDir, 'assets');
const distIndex = path.join(distDir, 'index.html');
const rootIndex = path.join(rootDir, 'index.html');

async function ensureBuildExists() {
  if (!existsSync(distDir) || !existsSync(distIndex)) {
    throw new Error('dist output not found. Run "npm run build" first.');
  }
}

async function cleanGeneratedRootAssets() {
  if (!existsSync(rootAssetsDir)) {
    return;
  }

  const files = await readdir(rootAssetsDir);
  const generatedPatterns = [/^index-.*\.(js|css)$/i, /^favicon-.*\.svg$/i];

  await Promise.all(
    files
      .filter((file) => generatedPatterns.some((pattern) => pattern.test(file)))
      .map((file) => rm(path.join(rootAssetsDir, file), { force: true }))
  );
}

async function syncDistToRoot() {
  await ensureBuildExists();
  await mkdir(rootAssetsDir, { recursive: true });
  await cleanGeneratedRootAssets();

  await cp(distAssetsDir, rootAssetsDir, { recursive: true, force: true });
  await cp(distIndex, rootIndex, { force: true });

  // Root-level static files emitted from public/ (favicon, resume, robots…)
  const distFiles = await readdir(distDir, { withFileTypes: true });
  await Promise.all(
    distFiles
      .filter((entry) => entry.isFile() && /\.(svg|pdf|txt|xml|webmanifest)$/i.test(entry.name))
      .map((entry) => cp(path.join(distDir, entry.name), path.join(rootDir, entry.name), { force: true }))
  );

  console.log('Synced dist/index.html and dist/assets to root for main-branch Pages deployment.');
}

syncDistToRoot().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
