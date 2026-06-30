import "~/styles/globals.css";

import { PageWrapper } from "~/components/page-wrapper";

export default function Layout(props: Readonly<{ children: React.ReactNode }>) {
  return (
    <PageWrapper
      className={"mb-0 min-h-dvh max-w-4xl items-center justify-center p-0"}
    >
      {props.children}
    </PageWrapper>
  );
}
