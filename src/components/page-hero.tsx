import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";
import { HeroBackground } from "./hero-background";
import { cn } from "~/lib/utils";

export function PageHero({
  children,
  alt,
  src,
  className,
  ...blob
}: PropsWithChildren<
  Pick<ComponentProps<typeof Image>, "src" | "alt" | "className"> &
    ComponentProps<typeof HeroBackground>
>) {
  return (
    <section className="my-6 flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex flex-1 flex-col">{children}</div>
      <div className="relative shrink-0 self-center">
        <HeroBackground {...blob} />
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          src={src}
          alt={alt}
          width={180}
          height={180}
          className={cn("relative mx-auto", className)}
          unoptimized
          priority
        />
      </div>
    </section>
  );
}
