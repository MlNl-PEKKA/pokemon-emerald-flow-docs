import { promises as fs } from "node:fs";
import path from "node:path";

const PUBLIC_DIR = path.resolve("public/sprites");
const OUTPUT_DIR = path.resolve("src/lib/generated/sprites");

const MIME_TYPES: Record<string, string> = {
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

async function walk(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, {
    withFileTypes: true,
  });

  const files: string[] = [];

  for (const entry of entries) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

async function main() {
  // Remove previously generated modules.
  await fs.rm(OUTPUT_DIR, {
    recursive: true,
    force: true,
  });

  await fs.mkdir(OUTPUT_DIR, {
    recursive: true,
  });

  const files = await walk(PUBLIC_DIR);

  let generated = 0;

  for (const input of files) {
    const ext = path.extname(input).toLowerCase();
    const mime = MIME_TYPES[ext];

    if (!mime) continue;

    const relative = path.relative(PUBLIC_DIR, input);

    const output = path.join(OUTPUT_DIR, relative.replace(/\.[^.]+$/, ".ts"));

    await fs.mkdir(path.dirname(output), {
      recursive: true,
    });

    const buffer = await fs.readFile(input);

    const base64 = buffer.toString("base64");

    const name = path.basename(input, ext);

    const source = `/* AUTO-GENERATED FILE - DO NOT EDIT */

export const ${name} = "data:${mime};base64,${base64}" as const;

`;

    await fs.writeFile(output, source, "utf8");

    generated++;
  }

  console.log(`✓ Generated ${generated} inline image module(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
