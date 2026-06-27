import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import type { TailwindColor } from "~/lib/types";
import { Md } from "./markdown";

export function Hero({
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
    <section className="flex flex-col-reverse gap-8 md:flex-row md:gap-0">
      <div className="flex flex-1 flex-col self-center *:mb-4 md:pt-4">
        {children}
      </div>
      <div className="relative flex items-center justify-center">
        {/* <HeroBackground {...blob} /> */}
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

export function HeroMd({
  children,
  ...props
}: Omit<ComponentProps<typeof Hero>, "children"> & { children: string }) {
  return (
    <Hero {...props}>
      <Md>{children}</Md>
    </Hero>
  );
}

function HeroBackground({
  blobBgColor,
  blobTranslateX,
  blobTranslateY,
  blocScale,
}: {
  blobBgColor?: `bg-${TailwindColor}-500`;
  blobTranslateX?: `translate-x-[calc(-50%-${number}px)]`;
  blobTranslateY?: `translate-y-[calc(-50%-${number}px)]`;
  blocScale?: `scale-${number}000`;
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 size-1 -translate-x-1/2 -translate-y-1/2 scale-5000 rounded-full bg-emerald-500 opacity-60 blur-[1px] dark:opacity-20",
        blobBgColor,
        blobTranslateX,
        blobTranslateY,
        blocScale,
      )}
    />
  );
}
