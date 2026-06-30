import { promises as fs } from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

import { features } from "~/lib/feature-list";

const PUBLIC_DIR = path.resolve("public/gallery");
const OUTPUT_DIR = path.resolve("public/gallery-placeholders");

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif"]);

function ffmpeg(input: string, output: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", [
      "-y",
      "-loglevel",
      "error",
      "-i",
      input,
      "-vf",
      "scale=24:-1",
      "-c:v",
      "libwebp",
      output,
    ]);

    child.on("error", reject);

    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with code ${code}`));
    });
  });
}

async function main() {
  await fs.rm(OUTPUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(OUTPUT_DIR, {
    recursive: true,
  });

  let generated = 0;

  for (const feature of Object.keys(features)) {
    const inputDir = path.join(PUBLIC_DIR, feature);
    const outputDir = path.join(OUTPUT_DIR, feature);

    try {
      const files = await fs.readdir(inputDir, {
        withFileTypes: true,
      });

      await fs.mkdir(outputDir, {
        recursive: true,
      });

      for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        if (!IMAGE_EXTENSIONS.has(ext)) continue;

        const input = path.join(inputDir, file.name);
        const output = path.join(
          outputDir,
          `${path.basename(file.name, ext)}.webp`,
        );

        await ffmpeg(input, output);
        generated++;
      }
    } catch {
      // Feature has no gallery directory.
      continue;
    }
  }

  console.log(`✓ Generated ${generated} gallery placeholder(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
