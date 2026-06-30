import { MutedLink } from "~/components/muted-link";
import Layout from "./(secondary)/layout";
import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";

export default function NotFound({
  url = "/",
  title = "Home",
}: {
  url?: string;
  title?: string;
}) {
  return (
    <Layout clasname="min-h-[calc(100dvh-7rem)]">
      <HeroImage alt="Unown spelling OOPS!" src="/sprites/running.webp" />
      <Md>{"**This page couldn't be found.**"}</Md>
      <MutedLink link={{ href: url, replace: true }}>{title}</MutedLink>
    </Layout>
  );
}
