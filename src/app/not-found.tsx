import { MutedLink } from "~/components/muted-link";
import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";
import { PageWrapper } from "~/components/page-wrapper";

export default function NotFound() {
  return (
    <PageWrapper
      className={
        "mb-0 min-h-[calc(100dvh-7rem)] max-w-4xl items-center justify-center p-0"
      }
    >
      <HeroImage alt="Unown spelling OOPS!" src="/sprites/running.webp" />
      <Md>{"**This page couldn't be found.**"}</Md>
      <MutedLink link={{ href: "/", replace: true }}>Home</MutedLink>
    </PageWrapper>
  );
}
