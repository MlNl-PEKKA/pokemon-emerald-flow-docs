import { HeroMd } from "~/components/hero";
import { FeatureNotes } from "~/components/feature-notes";
import { Md } from "~/components/markdown";
import { Options } from "~/components/options";
import { features } from "~/lib/feature-list";
import { running } from "~/lib/sprites/running";
import { mom } from "~/lib/sprites/mom";
import { bButton } from "~/lib/sprites/bButton";

export default function Page() {
  const feature = features.running;
  const img = running;
  const alt = "Brendan running sprite";
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
**${feature.title}** can be used to set the type running experience you want to have.

This feature lets you run indoors or change how holding the B Button works.
`
}
</HeroMd>
<FeatureNotes
bgColor="bg-emerald-800"
borderColor="border-emerald-600"
childBorderColor="[&>div]:not-first:border-emerald-600"
textColor="text-emerald-600"
>
<FeatureNotes.NoteMd src={mom} alt="Mom sprite">
{
`
**Running Shoes** 

Running shoes must still be obtained by mom at the start of the game.
`
}
</FeatureNotes.NoteMd>
<FeatureNotes.NoteMd src={bButton} alt="B-Button sprite">
{
`
**B-Button** 

Some options might still require you hold B.
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
