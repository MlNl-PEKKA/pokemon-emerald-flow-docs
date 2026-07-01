/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import BinFile from "~/lib/romP/rom-patcher-js/modules/BinFile";
import RomPatcher from "~/lib/romP/rom-patcher-js/RomPatcher.js";

export interface PatchOptions {
  fixChecksum?: boolean;
  outputSuffix?: boolean;
  requireValidation?: boolean;
  outputName?: string;
}

export async function romPatch(
  romFile: File,
  patchFile: File,
  options: PatchOptions = {},
): Promise<File> {
  const [romBuffer, patchBuffer] = await Promise.all([
    romFile.arrayBuffer(),
    patchFile.arrayBuffer(),
  ]);

  // Build BinFiles
  const rom = new BinFile(romBuffer);
  rom.fileName = romFile.name;
  rom.fileType = romFile.type || "application/octet-stream";

  const patchBin = new BinFile(patchBuffer);
  patchBin.fileName = patchFile.name;

  // Automatically detects IPS/BPS/UPS/APS/RUP/PPF/XDelta/etc.
  const parsedPatch = RomPatcher.parsePatchFile(patchBin);

  if (!parsedPatch) throw new Error("Invalid or unsupported patch.");

  const patched = RomPatcher.applyPatch(rom, parsedPatch, {
    fixChecksum: options.fixChecksum ?? true,
    outputSuffix: options.outputSuffix ?? false,
    requireValidation: options.requireValidation ?? true,
  });

  const outputName = options.outputName ?? patched.fileName ?? romFile.name;

  return new File([patched._u8array], outputName, {
    type: "application/octet-stream",
    lastModified: Date.now(),
  });
}
