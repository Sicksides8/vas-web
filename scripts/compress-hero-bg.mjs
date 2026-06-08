import sharp from "sharp";
import { stat, rename, unlink } from "node:fs/promises";
import { resolve } from "node:path";

const INPUT = resolve("public/hero-bg.jpg");
const TMP = resolve("public/hero-bg.compressed.jpg");

const before = await stat(INPUT);
const meta = await sharp(INPUT).metadata();

console.log(`Original: ${meta.width}x${meta.height}, ${(before.size / 1024 / 1024).toFixed(2)} MB`);

const MAX_WIDTH = 2400;
const QUALITY = 78;

await sharp(INPUT)
  .rotate()
  .resize({ width: MAX_WIDTH, withoutEnlargement: true })
  .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
  .toFile(TMP);

const after = await stat(TMP);
const newMeta = await sharp(TMP).metadata();

await unlink(INPUT);
await rename(TMP, INPUT);

const savedPct = ((1 - after.size / before.size) * 100).toFixed(1);
console.log(`Compressed: ${newMeta.width}x${newMeta.height}, ${(after.size / 1024 / 1024).toFixed(2)} MB (-${savedPct}%)`);
