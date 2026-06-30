import { promises as fs } from "node:fs";
import path from "node:path";

import { features } from "~/lib/feature-list";

const PUBLIC_DIR = path.resolve("public/gallery");
const OUTPUT_FILE = path.resolve("src/lib/generated/gallery.ts");

const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif"]);

async function main() {
  const gallery: Record<string, string[]> = {};

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(PUBLIC_DIR, feature);

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      gallery[feature] = files
        .filter(
          (file) =>
            file.isFile() &&
            IMAGE_EXTENSIONS.has(path.extname(file.name).toLowerCase()),
        )
        .map((file) => path.basename(file.name, path.extname(file.name)));
    } catch {
      // Directory doesn't exist.
      gallery[feature] = [];
    }
  }

  const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const gallery = ${JSON.stringify(gallery, null, 2)} as const;
`;

  await fs.writeFile(OUTPUT_FILE, source, "utf8");

  console.log(
    `✓ Generated gallery for ${Object.keys(gallery).length} feature(s).`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
