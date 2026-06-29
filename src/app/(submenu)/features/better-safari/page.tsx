import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { repel } from "~/lib/sprites/repel";
import { pokeball } from "~/lib/sprites/pokeball";

export default function Page() {
  const feature = features["better-safari"];
  const img = repel;
  const alt = "Repel item sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${feature.title}
`
}
</Md>
<HeroMd 
src={img}
alt={alt}
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
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={pokeball} alt="Pokeball item sprite">
{
`
**Encounters** 

Wild Pokémon with a higher level than your
lead Pokémon can still appear.
`
}
</FeatureNotes.NoteMd>
</FeatureNotes>
<Options>
{
feature.options.map((option, i)=>
(
<Options.OptionMd
key={i}
src={img}
alt={alt}
isDefault={option.title == feature.defaultOption}
>
{
`
**${option.title}**

${option.description}
`
}
</Options.OptionMd>)
)
}
</Options>
</>
);
}
