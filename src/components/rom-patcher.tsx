"use client";

import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { romPatch } from "~/lib/rom-patch";

const queryClient = new QueryClient();

export function RomPatcher() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const [rom, setRom] = useState<File | null>(null);
  const [patch, setPatch] = useState<File | null>(null);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!rom) throw new Error("Please select a ROM.");
      if (!patch) throw new Error("Please select a patch.");

      return romPatch(rom, patch);
    },
    throwOnError: true,
  });

  return (
    <div className="max-w-md space-y-4">
      <div>
        <label>ROM</label>
        <Input
          type="file"
          accept=".gba,.gbc,.gb,.nds,.zip"
          onChange={(e) => setRom(e.target.files?.[0] ?? null)}
        />
      </div>

      <div>
        <label>Patch</label>
        <Input
          type="file"
          accept=".bps,.ips,.ups,.aps,.ppf,.rup,.xdelta"
          onChange={(e) => setPatch(e.target.files?.[0] ?? null)}
        />
      </div>

      <Button disabled={mutation.isPending} onClick={() => mutation.mutate()}>
        {mutation.isPending ? "Patching..." : "Patch ROM"}
      </Button>

      {mutation.isError && (
        <p className="text-red-500">{mutation.error.message}</p>
      )}

      {mutation.isSuccess && (
        <div className="space-y-2">
          <p>✅ Patch applied successfully!</p>

          <Button
            onClick={() => {
              const file = mutation.data;
              const url = URL.createObjectURL(file);

              const a = document.createElement("a");
              a.href = url;
              a.download = file.name;
              a.click();

              URL.revokeObjectURL(url);
            }}
          >
            Download
          </Button>
        </div>
      )}
    </div>
  );
}
