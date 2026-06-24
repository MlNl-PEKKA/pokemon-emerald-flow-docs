import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

export function PageWrapper({
  children,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<"section">>) {
  return (
    <section
      {...props}
      className={cn(
        "mx-auto mb-16 min-h-[calc(100dvh-8rem)] w-full max-w-2xl px-8",
        props.className,
      )}
    >
      {children}
    </section>
  );
}
