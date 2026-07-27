import { readFile, readdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const publicRoot = path.join(projectRoot, "public");
const imagesRoot = path.join(publicRoot, "images");
const fontsRoot = path.join(publicRoot, "fonts");
const mobileCss = await readFile(
  path.join(publicRoot, "css", "mobile.css"),
  "utf8",
);
const inlineMobileCss = mobileCss
  .replace(/\/\*[\s\S]*?\*\//g, "")
  .replace(/\s+/g, " ")
  .replace(/\s*([{}:;,>+])\s*/g, "$1")
  .trim();

async function findIndexFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) return findIndexFiles(fullPath);
      return entry.name === "index.html" ? [fullPath] : [];
    }),
  );
  return nested.flat();
}

function relativeUrl(fromDirectory, targetPath) {
  return path.relative(fromDirectory, targetPath).split(path.sep).join("/");
}

function preserveCssImageHeight(tag) {
  const styleMatch = tag.match(/\bstyle="([^"]*)"/);
  if (
    !styleMatch ||
    /(?:^|;)\s*height\s*:/i.test(styleMatch[1])
  ) {
    return tag;
  }

  const style = `${styleMatch[1].replace(/;+\s*$/, "")};height:auto`;
  return tag.replace(styleMatch[0], `style="${style}"`);
}

function jpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf)
    ) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }
    offset += length + 2;
  }
  throw new Error("JPEG dimensions could not be read");
}

const imageDimensions = new Map();
for (const file of await readdir(imagesRoot)) {
  if (!file.endsWith(".jpeg")) continue;
  imageDimensions.set(
    file,
    jpegDimensions(await readFile(path.join(imagesRoot, file))),
  );
}

const indexFiles = await findIndexFiles(publicRoot);
for (const indexFile of indexFiles) {
  const directory = path.dirname(indexFile);
  let html = await readFile(indexFile, "utf8");

  const sansUrl = relativeUrl(
    directory,
    path.join(fontsRoot, "source-sans-3-latin.woff2"),
  );
  const serifUrl = relativeUrl(
    directory,
    path.join(fontsRoot, "source-serif-4-latin.woff2"),
  );

  html = html.replace(
    /<link rel="preconnect" href="https:\/\/fonts\.gstatic\.com" crossorigin="anonymous">\n<link href="https:\/\/fonts\.googleapis\.com\/css2\?[^"]+" rel="stylesheet">/,
    [
      `<link rel="preload" href="${sansUrl}" as="font" type="font/woff2" crossorigin>`,
      `<link rel="preload" href="${serifUrl}" as="font" type="font/woff2" crossorigin>`,
      `<style data-performance-fonts>@font-face{font-family:'Source Sans 3';font-style:normal;font-weight:400 700;font-display:swap;src:url('${sansUrl}') format('woff2')}@font-face{font-family:'Source Serif 4';font-style:normal;font-weight:400 700;font-display:swap;src:url('${serifUrl}') format('woff2')}</style>`,
    ].join("\n"),
  );

  const mobileHref = html.match(/href="([^"]*css\/mobile\.css)"/)?.[1];
  if (!mobileHref) throw new Error(`Missing mobile stylesheet in ${indexFile}`);
  const mobileBlock = [
    `<style data-inline-mobile>${inlineMobileCss}</style>`,
    `<link rel="stylesheet" href="${mobileHref}" media="print" onload="this.media='all'">`,
    `<noscript><link rel="stylesheet" href="${mobileHref}"></noscript>`,
    "",
  ].join("\n");
  if (html.includes("<style data-inline-mobile>")) {
    html = html.replace(
      /<style data-inline-mobile>[\s\S]*?(?=<style>body\{)/,
      mobileBlock,
    );
  } else {
    html = html.replace(
      /<link rel="stylesheet" href="[^"]*css\/mobile\.css">/,
      mobileBlock.trimEnd(),
    );
  }

  const imageTags = [...html.matchAll(/<img\b[^>]*>/g)];
  for (const match of imageTags.reverse()) {
    const tag = match[0];
    const cssSizedTag = preserveCssImageHeight(tag);
    if (/\bwidth=/.test(tag)) {
      if (cssSizedTag !== tag) {
        html =
          html.slice(0, match.index) +
          cssSizedTag +
          html.slice(match.index + tag.length);
      }
      continue;
    }
    const src = tag.match(/\bsrc="([^"]+\.jpeg)"/)?.[1];
    if (!src) continue;
    const filename = path.basename(src);
    const dimensions = imageDimensions.get(filename);
    if (!dimensions) {
      throw new Error(`Missing dimensions for ${filename}`);
    }

    const base = src.slice(0, -".jpeg".length);
    const fullWidth = Math.min(dimensions.width, 1200);
    const sizes = /\bfetchpriority="high"/.test(tag)
      ? "(max-width: 920px) calc(100vw - 48px), 600px"
      : "(max-width: 700px) calc(100vw - 48px), 320px";
    const source = [
      `<source type="image/webp" srcset="`,
      `${base}-480.webp 480w, `,
      `${base}-800.webp 800w, `,
      `${base}.webp ${fullWidth}w`,
      `" sizes="${sizes}">`,
    ].join("");
    const enhancedImg = cssSizedTag.replace(
      "<img ",
      `<img width="${dimensions.width}" height="${dimensions.height}" `,
    );
    const picture = `<picture style="display:contents" data-responsive-image="1">${source}${enhancedImg}</picture>`;
    html =
      html.slice(0, match.index) +
      picture +
      html.slice(match.index + tag.length);
  }

  await writeFile(indexFile, html);
}

const manifest = (
  await Promise.all(
    indexFiles
      .map((file) => path.relative(publicRoot, file).split(path.sep).join("/"))
      .sort()
      .map(async (relativePath) => {
        const body = await readFile(path.join(publicRoot, relativePath));
        const hash = createHash("sha256").update(body).digest("hex");
        return `${hash}  ${relativePath}`;
      }),
  )
).join("\n");
await writeFile(
  path.join(projectRoot, "tests", "static-export-html.sha256"),
  `${manifest}\n`,
);

console.log(`Optimized ${indexFiles.length} static pages.`);
