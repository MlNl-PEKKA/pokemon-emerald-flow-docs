import { Undo2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { pages } from "~/lib/menu-items";

export default async function Page({
  params,
}: PageProps<"/gallery/[feature]/[id]">) {
  const { id, feature } = await params;
  return (
    <>
      <div className="relative w-full">
        <Image
          alt={`Feature ${feature} Showcase #${id}`}
          src={`/gallery/${feature}/${id}.webp`}
          width={240}
          height={160}
          style={{
            width: "100%",
            height: "auto",
          }}
          unoptimized
          priority
        />
        <Link href={`${pages.features.url}/${feature}`} replace>
          <Button
            variant="secondary"
            className="absolute top-[1%] left-[1%] opacity-80"
          >
            <Undo2 />
          </Button>
        </Link>
      </div>
      <p>Description</p>
    </>
  );
}
