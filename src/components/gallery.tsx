/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { PropsWithChildren } from "react";
import type { features } from "~/lib/feature-list";
import { H3 } from "./ui/typography";
import { gallery } from "~/lib/generated/gallery";
import Link from "next/link";
import Image from "next/image";
import type { Placeholders } from "~/lib/generated/placeholders/type";

export function Gallery<T extends keyof typeof features>({
  feature,
  placeholders,
}: PropsWithChildren<{ feature: T; placeholders: Placeholders[NoInfer<T>] }>) {
  if (gallery[feature].length === 0) return;
  return (
    <div className="flex w-full flex-col gap-4">
      <H3>Gallery</H3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {gallery[feature].map((id) => (
          <Img
            key={id}
            alt=""
            href={`/gallery/${feature}/${id}`}
            // @ts-expect-error
            placeholder={placeholders[id]}
          />
        ))}
      </div>
    </div>
  );
}

function Img({
  href,
  alt,
  placeholder,
}: {
  href: string;
  alt: string;
  placeholder?: string;
}) {
  return (
    <Link href={href}>
      <Image
        placeholder={placeholder ? "blur" : "empty"}
        alt={alt}
        src={`${href}.webp`}
        blurDataURL={placeholder}
        width={240}
        height={160}
        className="w-full rounded-md"
        unoptimized
      />
    </Link>
  );
}
