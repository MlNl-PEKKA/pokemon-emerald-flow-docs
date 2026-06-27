import { HeroMd } from "~/components/hero";
import { pages } from "~/lib/menu-items";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.features["permanent-repel"].title}
`
}
</Md>
<HeroMd 
src="/repel.webp" 
alt="Repel item sprite"
>
{
`
**Permanent Repel** lets you toggle Repel effects on or
off without repeatedly using any Repel items.

It behaves just like a standard Repel, but stays active until you
choose otherwise.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src="/pokeball.webp" alt="Pokeball item sprite">
{
`
**Encounters** 

Wild Pokémon with a higher level than your
lead Pokémon can still appear.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
</>
);
}
