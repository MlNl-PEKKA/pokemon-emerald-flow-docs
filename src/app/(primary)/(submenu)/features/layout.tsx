import SubLayout from "~/components/sub-layout";
import { pages } from "~/lib/menu-items";

import type { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
  return <SubLayout {...pages.features}>{props.children}</SubLayout>;
}
