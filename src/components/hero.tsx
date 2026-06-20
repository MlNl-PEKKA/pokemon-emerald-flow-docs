import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";

export function Hero({
  children,
  ...props
}: PropsWithChildren<Pick<ComponentProps<typeof Image>, "src" | "alt">>) {
  return (
    <section className="my-6 flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:gap-0">
      <div className="flex flex-1 flex-col">{children}</div>
      <div className="shrink-0 self-center">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image width={256} height={256} className="mx-auto" {...props} />
      </div>
    </section>
  );
}
