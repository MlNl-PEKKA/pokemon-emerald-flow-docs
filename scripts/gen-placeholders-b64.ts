import { promises as fs } from "node:fs";
import path from "node:path";

import { features } from "~/lib/feature-list";

const PUBLIC_DIR = path.resolve("public/gallery-placeholders");
const OUTPUT_DIR = path.resolve("src/lib/generated/placeholders");

const MIME_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
};

const IMAGE_EXTENSIONS = new Set(Object.keys(MIME_TYPES));

async function main() {
  await fs.rm(OUTPUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(OUTPUT_DIR, {
    recursive: true,
  });

  const imports: string[] = [];
  const typeEntries: string[] = [];

  let generated = 0;

  for (const feature of Object.keys(features)) {
    const featureDir = path.join(PUBLIC_DIR, feature);

    const placeholders: Record<string, string> = {};

    try {
      const files = await fs.readdir(featureDir, {
        withFileTypes: true,
      });

      for (const file of files) {
        if (!file.isFile()) continue;

        const ext = path.extname(file.name).toLowerCase();
        const mime = MIME_TYPES[ext];

        if (!IMAGE_EXTENSIONS.has(ext) || !mime) continue;

        const id = path.basename(file.name, ext);

        const buffer = await fs.readFile(path.join(featureDir, file.name));

        placeholders[id] = `data:${mime};base64,${buffer.toString("base64")}`;
      }
    } catch {
      // Feature has no placeholder directory.
    }

    const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const placeholder = ${JSON.stringify(placeholders, null, 2)} as const;
`;

    await fs.writeFile(path.join(OUTPUT_DIR, `${feature}.ts`), source, "utf8");

    const importName = feature
      .replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
      .replace(/^[a-z]/, (c) => c.toUpperCase());

    imports.push(
      `import type { placeholder as ${importName} } from "./${feature}";`,
    );

    typeEntries.push(`  "${feature}": typeof ${importName};`);

    generated++;
  }

  const typeSource = `/* AUTO-GENERATED FILE - DO NOT EDIT */

${imports.join("\n")}

export type Placeholders = {
${typeEntries.join("\n")}
};
`;

  await fs.writeFile(path.join(OUTPUT_DIR, "type.ts"), typeSource, "utf8");

  console.log(`✓ Generated ${generated} placeholder module(s) and type.ts.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
