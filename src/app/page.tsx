import Image from "next/image";
import { Badge } from "~/components/ui/badge";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4">
      <Image
        src="/logo.png"
        width={140}
        height={140}
        alt="Pokemon Emerald Flow Logo"
        priority
      />

      <div className="mt-8 flex flex-col items-center gap-2">
        <h1 className="text-center text-2xl font-bold tracking-tight md:text-4xl">
          Pokemon Emerald Flow
        </h1>
        <Badge variant={"outline"}>v1.0.0-beta</Badge>
      </div>
    </div>
  );
}
