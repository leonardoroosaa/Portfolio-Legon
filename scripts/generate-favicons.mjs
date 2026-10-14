import sharp from "sharp";
import { writeFile } from "node:fs/promises";

// Apenas apara margens transparentes e redimensiona; não redesenha nem recolore.
const symbol = await sharp("public/images/branding/icone-original.png")
  .trim({ threshold: 10 })
  .png()
  .toBuffer();

async function png(size) {
  const padding = Math.max(1, Math.round(size * 0.04));
  return sharp(symbol)
    .resize(size - padding * 2, size - padding * 2, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .extend({
      top: padding, bottom: padding, left: padding, right: padding,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();
}

const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map(png));
// ICO multi-resolução com imagens PNG, suportado pelos navegadores modernos.
const header = Buffer.alloc(6 + 16 * images.length);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(images.length, 4);
let offset = header.length;
images.forEach((image, i) => {
  const entry = 6 + 16 * i;
  header[entry] = sizes[i];
  header[entry + 1] = sizes[i];
  header.writeUInt16LE(1, entry + 4);
  header.writeUInt16LE(32, entry + 6);
  header.writeUInt32LE(image.length, entry + 8);
  header.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile("src/app/favicon.ico", Buffer.concat([header, ...images]));
await writeFile("src/app/icon.png", await png(32));
const apple = await png(180);
await writeFile("src/app/apple-icon.png", apple);
await writeFile("public/apple-touch-icon.png", apple);
await writeFile("public/favicon-192.png", await png(192));
await writeFile("public/favicon-512.png", await png(512));
console.log("Favicon ICO 16/32/48, PNG 32/192/512 e Apple Touch 180 criados.");
