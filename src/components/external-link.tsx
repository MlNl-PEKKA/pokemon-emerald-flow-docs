import { ExternalLink as Icon } from "lucide-react";
import type { PropsWithChildren } from "react";
import { MutedLink } from "~/components/muted-link";

export function ExternalLink({
  href,
  children,
}: PropsWithChildren<{ href: string }>) {
  return (
    <>
      <MutedLink
        link={{
          href,
          className: "mx-auto",
          target: "_blank",
        }}
        muted={{
          size: "medium",
          className: "flex flex-1 flex-row gap-1 items-center",
        }}
      >
        {children}
        <Icon size={16} className="-translate-y-px" />
      </MutedLink>
    </>
  );
}
