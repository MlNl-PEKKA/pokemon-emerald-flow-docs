import type { PropsWithChildren } from "react";
import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: PropsWithChildren) {
  return (
    <PageWrapper className="min-h-[calc(100dvh-9rem)] items-center justify-center">
      {props.children}
    </PageWrapper>
  );
}
