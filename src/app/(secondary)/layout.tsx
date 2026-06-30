import "~/styles/globals.css";

import { PageWrapper } from "~/components/page-wrapper";
import { cn } from "~/lib/utils";

export default function Layout(
  props: Readonly<{ children: React.ReactNode; clasname?: string }>,
) {
  return (
    <PageWrapper
      className={cn(
        "mb-0 min-h-dvh max-w-4xl items-center justify-center p-0",
        props.clasname,
      )}
    >
      {props.children}
    </PageWrapper>
  );
}
