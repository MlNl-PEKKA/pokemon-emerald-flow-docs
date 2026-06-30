import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="md:mt-10 md:min-h-[calc(100dvh-12rem)] [&>a:first-child]:mb-2">
      {props.children}
    </PageWrapper>
  );
}
