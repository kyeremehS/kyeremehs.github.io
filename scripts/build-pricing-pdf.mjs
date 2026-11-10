// Builds the shareable pricing PDF from src/data.js using headless Chrome, so
// the PDF always matches the site's live content and colours.
//
//   npm run pdf   ->  public/web-development-pricing.pdf
//
// Montserrat woff2 files are cached in print/fonts/ (downloaded once).

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  includedInAll,
  packages,
  process as workflow,
  site,
  socialLinks,
  stats,
  terms,
} from "../src/data.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const fontDir = path.join(root, "print", "fonts");
const outFile = path.join(root, "public", "web-development-pricing.pdf");

const FONT_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function ensureFonts() {
  mkdirSync(fontDir, { recursive: true });
  for (const weight of [400, 600, 700]) {
    const file = path.join(fontDir, `montserrat-${weight}.woff2`);
    if (existsSync(file)) continue;
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Montserrat:wght@${weight}&display=swap`,
      { headers: { "User-Agent": FONT_UA } }
    ).then((r) => {
      if (!r.ok) throw new Error(`Google Fonts HTTP ${r.status}`);
      return r.text();
    });
    const latin = css
      .split("@font-face")
      .slice(1)
      .find((face) => face.includes("U+0000-00FF"));
    const fontUrl = latin?.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    if (!fontUrl) throw new Error(`No woff2 URL found for weight ${weight}`);
    const buf = Buffer.from(
      await fetch(fontUrl).then((r) => {
        if (!r.ok) throw new Error(`Font download HTTP ${r.status}`);
        return r.arrayBuffer();
      })
    );
    writeFileSync(file, buf);
    console.log(`Downloaded Montserrat ${weight} (${Math.round(buf.length / 1024)}KB)`);
  }
}

function findChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ].filter(Boolean);
  const found = candidates.find((c) => existsSync(c));
  if (!found) throw new Error("Chrome not found — set CHROME_PATH to its executable.");
  return found;
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const fontUrl = (weight) =>
  pathToFileURL(path.join(fontDir, `montserrat-${weight}.woff2`)).href;
const heroUrl = pathToFileURL(path.join(root, "src", "assets", "hero-office.jpg")).href;

function packageCard(pkg) {
  const feats = pkg.features
    .map((f) => `<li><span class="ck">&#10003;</span><span>${esc(f)}</span></li>`)
    .join("");
  const miss = pkg.missing
    .map((m) => `<li><span class="dash">&mdash;</span><span>${esc(m)}</span></li>`)
    .join("");
  return `
    <div class="card${pkg.popular ? " popular" : ""}">
      ${pkg.popular ? '<span class="tag">Most popular</span>' : ""}
      <div class="card-top">
        <h3>${esc(pkg.name)}</h3>
        <span class="tagline">${esc(pkg.tagline)}</span>
      </div>
      <div class="price">${esc(pkg.price)}</div>
      <div class="meta">one-off &middot; typical build ${esc(pkg.delivery)}</div>
      <p class="pitch">${esc(pkg.pitch)}</p>
      <hr />
      <ul class="feats">${feats}</ul>
      ${miss ? `<ul class="miss">${miss}</ul>` : ""}
      <div class="cta-btn${pkg.popular ? "" : " outline"}">Start with ${esc(pkg.name)}</div>
    </div>`;
}

export function buildHtml() {
  const cards = packages.map(packageCard).join("");
  const included = includedInAll
    .map(
      (item) =>
        `<div class="inc"><span class="ck">&#10003;</span><span>${esc(item)}</span></div>`
    )
    .join("");
  const steps = workflow
    .map(
      (s) => `
      <div class="step">
        <div class="num">${esc(s.step)}</div>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.body)}</p>
      </div>`
    )
    .join("");
  const termItems = terms
    .map(
      (t) => `<li><span class="bullet"></span><span>${esc(t)}</span></li>`
    )
    .join("");
  const socials = Object.values(socialLinks)
    .map((u) => u.replace(/^https?:\/\//, ""))
    .join(" &middot; ");
  const statItems = stats
    .map(
      (s) =>
        `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Samuel Kyeremeh — Web Development Pricing</title>
<style>
@font-face { font-family:"Montserrat"; font-style:normal; font-weight:400; src:url("${fontUrl(400)}") format("woff2"); }
@font-face { font-family:"Montserrat"; font-style:normal; font-weight:600; src:url("${fontUrl(600)}") format("woff2"); }
@font-face { font-family:"Montserrat"; font-style:normal; font-weight:700; src:url("${fontUrl(700)}") format("woff2"); }

@page { size:A4; margin:0; }

* { box-sizing:border-box; margin:0; padding:0; -webkit-print-color-adjust:exact; print-color-adjust:exact; }

body { font-family:"Montserrat", sans-serif; color:#2d3748; font-size:8.5pt; line-height:1.55; background:#fff; }
img { display:block; }
ul { list-style:none; }
hr { border:0; border-top:1px solid #e4e8ef; margin:3.5mm 0; }

.page { width:210mm; min-height:297mm; page-break-after:always; background:#fff; display:flex; flex-direction:column; }
.page.last { page-break-after:auto; }
.mid { flex:1; }

/* ---------- shared ---------- */

.eyebrow { font-size:7.5pt; font-weight:600; color:#5b6577; margin-bottom:1.5mm; }
.eyebrow.light { color:#b7c1d4; }
.dot { display:inline-block; width:1.6mm; height:1.6mm; border-radius:50%; background:#ffbc00; margin-right:1.5mm; }
h1 { font-size:25pt; font-weight:700; letter-spacing:-0.03em; line-height:1.12; color:#fff; }
h2 { font-size:14pt; font-weight:700; letter-spacing:-0.02em; color:#101828; }
h3 { font-size:10.5pt; font-weight:700; letter-spacing:-0.01em; color:#101828; }
h4 { font-size:8.5pt; font-weight:700; color:#101828; }
.light { color:#dfe6f0; }
.pad { padding:7mm 14mm; }
.sec-head { margin-bottom:5mm; }
.mark { display:inline-grid; place-items:center; width:7mm; height:7mm; border-radius:1.5mm; background:#fff; color:#16233f; font-size:7.5pt; font-weight:700; }
.mark.on-white { background:#16233f; color:#fff; }
.brand-name { font-size:9pt; font-weight:700; color:#fff; letter-spacing:-0.01em; }
.brand-right { margin-left:auto; font-size:7.5pt; font-weight:600; color:#b7c1d4; }
.ck { color:#16233f; font-weight:700; flex-shrink:0; }

/* ---------- page 1 ---------- */

.hero { position:relative; height:62mm; overflow:hidden; background:#16233f; flex-shrink:0; }
.hero-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center center; }
.hero-shade { position:absolute; inset:0; background:linear-gradient(90deg, rgba(11,18,34,0.95) 0%, rgba(11,18,34,0.86) 42%, rgba(11,18,34,0.55) 100%); }
.hero-inner { position:absolute; inset:0; padding:6mm 14mm; display:flex; flex-direction:column; }
.brand { display:flex; align-items:center; gap:2.5mm; }
.hero-copy { margin-top:auto; }
.hero-copy .eyebrow { margin-bottom:2mm; }
.hero-copy p { margin-top:2.5mm; max-width:150mm; font-size:8.5pt; }

.stats { display:grid; grid-template-columns:repeat(4, 1fr); gap:5mm; background:#1f3055; padding:4mm 14mm; flex-shrink:0; }
.stat b { display:block; font-size:9.5pt; font-weight:700; color:#fff; letter-spacing:-0.01em; }
.stat span { display:block; font-size:6pt; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; color:#b7c1d4; margin-top:0.8mm; }

.packages-pad { flex:1; display:flex; flex-direction:column; justify-content:center; }

.cards { display:grid; grid-template-columns:repeat(3, 1fr); gap:5mm; margin-top:8mm; }
.card { position:relative; display:flex; flex-direction:column; border:1px solid #e4e8ef; border-radius:2mm; padding:5mm; background:#fff; break-inside:avoid; }
.card.popular { border-color:#16233f; border-top:1.2mm solid #ffbc00; }
.tag { position:absolute; top:-3.2mm; left:5mm; background:#ffbc00; color:#101828; font-size:6pt; font-weight:700; letter-spacing:0.08em; text-transform:uppercase; padding:1mm 2.5mm; border-radius:1mm; }
.card-top { display:flex; align-items:baseline; justify-content:space-between; gap:2mm; }
.tagline { font-size:6pt; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:#8a93a3; }
.price { font-size:17pt; font-weight:700; letter-spacing:-0.02em; color:#101828; margin-top:3mm; }
.meta { font-size:6.5pt; color:#5b6577; margin-top:0.5mm; }
.pitch { font-size:7.5pt; color:#5b6577; margin-top:2.5mm; }
.feats { display:flex; flex-direction:column; gap:1.6mm; font-size:7pt; line-height:1.45; }
.feats li, .miss li { display:flex; gap:2mm; }
.miss { display:flex; flex-direction:column; gap:1.2mm; font-size:6.5pt; color:#8a93a3; margin-top:3mm; }
.dash { color:#8a93a3; flex-shrink:0; }
.cta-btn { margin-top:auto; text-align:center; padding:2.6mm; border-radius:1.5mm; background:#16233f; color:#fff; font-size:7.5pt; font-weight:600; }
.cta-btn.outline { background:#fff; color:#101828; border:1px solid #cdd4e0; }
.fine { margin-top:5mm; font-size:6.5pt; color:#8a93a3; }

/* ---------- page 2 ---------- */

.bar { display:flex; align-items:center; gap:2.5mm; background:#16233f; padding:3.5mm 14mm; flex-shrink:0; }
.bar .brand-name { font-size:8.5pt; }
.bar-mid { font-size:7pt; color:#b7c1d4; }
.band { background:#f6f8fb; border-bottom:1px solid #e4e8ef; padding:7mm 14mm; }
.inc-grid { display:grid; grid-template-columns:1fr 1fr; gap:2.5mm 8mm; }
.inc { display:flex; gap:2.5mm; align-items:flex-start; font-size:7.5pt; line-height:1.45; background:#fff; border:1px solid #e4e8ef; border-radius:1.5mm; padding:2.5mm 3mm; }
.steps { display:grid; grid-template-columns:repeat(4, 1fr); gap:5mm; }
.step { border-top:0.8mm solid #ffbc00; padding-top:3mm; break-inside:avoid; }
.num { font-size:6.5pt; font-weight:700; letter-spacing:0.12em; color:#e8a900; }
.step h4 { margin-top:1.5mm; }
.step p { font-size:7pt; color:#5b6577; margin-top:1.2mm; line-height:1.5; }
.terms-sec { border-top:1px solid #e4e8ef; }
.terms li { display:flex; gap:3mm; align-items:flex-start; font-size:7.5pt; color:#5b6577; padding:2.2mm 0; border-bottom:1px solid #e4e8ef; }
.bullet { width:1.6mm; height:1.6mm; border-radius:50%; background:#ffbc00; flex-shrink:0; margin-top:1.4mm; }

.cta { background:#16233f; color:#fff; text-align:center; padding:9mm 14mm; flex-shrink:0; }
.cta h2 { color:#fff; }
.cta p { margin-top:2.5mm; font-size:8.5pt; color:#dfe6f0; }
.cta-email { margin-top:4mm; font-size:15pt; font-weight:700; color:#ffbc00; letter-spacing:-0.01em; }
.cta-meta { margin-top:2.5mm; font-size:7pt; color:#b7c1d4; }
</style>
</head>
<body>

<!-- ================= PAGE 1 ================= -->
<div class="page">
  <div class="hero">
    <img class="hero-img" src="${heroUrl}" alt="" />
    <div class="hero-shade"></div>
    <div class="hero-inner">
      <div class="brand">
        <span class="mark">SK</span>
        <span class="brand-name">${esc(site.name)}</span>
        <span class="brand-right">samuelkyeremeh.dev</span>
      </div>
      <div class="hero-copy">
        <div class="eyebrow light"><span class="dot"></span>Web development &middot; Ghana</div>
        <h1>Published prices.<br />Fixed quotes.</h1>
        <p class="light">Three packages &mdash; websites, online stores and web apps. Each includes a year of
        domain, hosting, SSL and business emails. What you're quoted is what you pay.</p>
      </div>
    </div>
  </div>

  <div class="stats">${statItems}</div>

  <div class="pad packages-pad">
    <div class="sec-head">
      <div class="eyebrow">Packages</div>
      <h2>Pick the closest fit.</h2>
    </div>
    <div class="cards">${cards}</div>
    <p class="fine">*Within a sensible page count for your project. Extra features are quoted before we build
    them, never after. Prices in Ghana cedis (GHS), one-off &mdash; no monthly lock-in, and you own the code.</p>
  </div>
</div>

<!-- ================= PAGE 2 ================= -->
<div class="page last">
  <div class="bar">
    <span class="mark">SK</span>
    <span class="brand-name">${esc(site.name)}</span>
    <span class="bar-mid">Web development &middot; Ghana</span>
    <span class="brand-right">samuelkyeremeh.dev</span>
  </div>

  <div class="mid">
    <div class="band">
      <div class="sec-head">
        <div class="eyebrow">Every package</div>
        <h2>Included as standard.</h2>
      </div>
      <div class="inc-grid">${included}</div>
    </div>

    <div class="pad">
      <div class="sec-head">
        <div class="eyebrow">Process</div>
        <h2>Precision in every step.</h2>
      </div>
      <div class="steps">${steps}</div>
    </div>

    <div class="pad terms-sec">
      <div class="sec-head">
        <div class="eyebrow">Good to know</div>
        <h2>Straight terms.</h2>
      </div>
      <ul class="terms">${termItems}</ul>
    </div>
  </div>

  <div class="cta">
    <div class="eyebrow light">Next step</div>
    <h2>Have a project in mind?</h2>
    <p>Tell me what you're building &mdash; you'll get a fixed quote, a timeline and a straight answer.</p>
    <div class="cta-email">${esc(site.email)}</div>
    <div class="cta-meta">${socials}</div>
  </div>
</div>

</body>
</html>`;
}

export async function main() {
  await ensureFonts();

  const chrome = findChrome();
  const htmlPath = path.join(os.tmpdir(), `pricing-pdf-${Date.now()}.html`);
  const profileDir = path.join(os.tmpdir(), `chrome-pdf-${Date.now()}`);
  writeFileSync(htmlPath, buildHtml());

  const result = spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-first-run",
      "--disable-extensions",
      `--user-data-dir=${profileDir}`,
      `--print-to-pdf=${outFile}`,
      "--no-pdf-header-footer",
      "--virtual-time-budget=10000",
      pathToFileURL(htmlPath).href,
    ],
    { stdio: "ignore", timeout: 120000 }
  );

  rmSync(htmlPath, { force: true });
  rmSync(profileDir, { recursive: true, force: true });

  if (result.status !== 0 || !existsSync(outFile)) {
    throw new Error(`Chrome PDF generation failed (status ${result.status}).`);
  }

  const size = readFileSync(outFile).length;
  const pageCount = (
    readFileSync(outFile).toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []
  ).length;
  console.log(
    `Wrote ${path.relative(root, outFile)} (${(size / 1024).toFixed(0)}KB, ${pageCount} pages)`
  );
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
