// Restores the source index.html before dev/build.
//
// The live site is served from the repo root, so `postbuild` copies the built
// dist/index.html over index.html. That means index.html is usually build
// output — this script puts the real source back so Vite compiles src/ instead
// of re-bundling the previous build. The source of truth is index.source.html.

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "index.source.html");
const targetPath = path.join(root, "index.html");

const source = readFileSync(sourcePath, "utf8");

let current = "";
try {
  current = readFileSync(targetPath, "utf8");
} catch {
  // index.html missing — always write it
}

if (current !== source) {
  writeFileSync(targetPath, source);
  console.log("Restored index.html from index.source.html");
}
