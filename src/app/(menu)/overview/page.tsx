import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";
import { pages } from "~/lib/menu-items";
import { birch } from "~/lib/sprites/birch";

export default function Page() {
  const img = birch;
  const alt = "Birch sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.overview.title}
`
}
</Md>
<HeroMd
src={img}
alt={alt}
blobBgColor="bg-amber-500"
>
{
`
**Pokemon Emerald Flow** is an enhancement project built
for and on top of _Pokémon Emerald_. Its goal is simple:
respect player choices, reduce friction, modernize when necessary, and
retain the core experience.

Just classic Emerald, but you set the flow of the game.
`
}
</HeroMd>
</>
);
}
