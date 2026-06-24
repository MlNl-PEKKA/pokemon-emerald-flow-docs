import Link from "next/link";
import { Muted } from "./ui/typography";
import type { ComponentProps, PropsWithChildren } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const mutedVariants = cva("", {
  variants: {
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export function MutedLink({
  children,
  muted,
  link,
}: PropsWithChildren<{
  link: Omit<ComponentProps<typeof Link>, "children">;
  muted?: Omit<ComponentProps<typeof Muted>, "children"> &
    VariantProps<typeof mutedVariants>;
}>) {
  return (
    <Link {...link}>
      <Muted
        className={cn(
          mutedVariants({ className: muted?.className, size: muted?.size }),
        )}
      >
        {children}
      </Muted>
    </Link>
  );
}
