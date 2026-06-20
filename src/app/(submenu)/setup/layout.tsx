import SubLayout from "~/components/sub-layout";
import { pages } from "~/lib/menu-items";

import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="mt-2 flex flex-col items-start gap-1 lg:mt-10 lg:min-h-[calc(100dvh-12rem)]">
      <SubLayout {...pages.setup}>{props.children}</SubLayout>
    </PageWrapper>
  );
}
