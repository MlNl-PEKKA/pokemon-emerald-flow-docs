import type { PropsWithChildren } from "react";
import { MutedLink } from "~/components/muted-link";

export default function SubLayout(
  props: PropsWithChildren<{ title: string; url: string }>,
) {
  return (
    <>
      <MutedLink link={{ href: props.url }}>{props.title}</MutedLink>
      {props.children}
    </>
  );
}
