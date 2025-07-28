import fs from "fs";
import path from "path";
import sharp from "sharp";
import { encode } from "blurhash";

// Recursively find image files
const walk = (dir: string): string[] => {
  const files = fs.readdirSync(dir);
  return files.flatMap((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) return walk(filepath);
    if (/\.(png|jpe?g|webp)$/i.test(file)) return [filepath];
    return [];
  });
};

const encodeImageToBlurhash = async (filePath: string): Promise<string> => {
  const image = sharp(filePath).ensureAlpha();
  const { data, info } = await image
    .raw()
    .toBuffer({ resolveWithObject: true });

  return encode(new Uint8ClampedArray(data), info.width, info.height, 6, 5);
};

const main = async () => {
  const baseDir = path.join(process.cwd(), "public");
  const imagePaths = walk(baseDir);

  const results: Record<string, string> = {};

  for (const filePath of imagePaths) {
    try {
      const relPath =
        "/" + path.relative(baseDir, filePath).replace(/\\/g, "/");
      const blurhash = await encodeImageToBlurhash(filePath);
      results[relPath] = blurhash;
      console.log(`${relPath}: ${blurhash}`);
    } catch (err) {
      console.warn(`Failed on ${filePath}:`, err);
    }
  }

  // Optional: write to a file
  fs.writeFileSync(
    "blurhash-output.json",
    JSON.stringify(results, null, 2),
    "utf-8"
  );
};

main();
