import { AlertMd } from "~/components/alerts";
import { HeroMd } from "~/components/hero";
import { Md } from "~/components/markdown";

import { pages } from "~/lib/menu-items";
import { setup } from "~/lib/generated/sprites/setup";

export default function Page() {
  const img = setup;
  const alt = "Bag and Brendan sprite";
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup.title}
`
}
</Md>
<HeroMd
src={img}
alt={alt}
>
{
`
**Pokemon Emerald Flow** is designed to be reverse
compatible with the original _Pokémon Emerald_.

However, save data is valuable, and mistakes happen. Make regular
backups of your save files and always create one before moving an
existing game to Emerald Flow.
`
}
</HeroMd>
<AlertMd variant="important">
{
`
Since Pokemon Emerald Flow is distributed as a patch, you'll need a
**LEGALLY OBTAINED COPY OF AN ORIGINAL POKÉMON EMERALD ROM**.
`
}
</AlertMd>
<AlertMd variant="caution">
{
`
**DO NOT ATTEMPT TO PATCH AN ALREADY MODIFIED OR PATCHED ROM.**
`
}
</AlertMd>
<AlertMd>
{
`
When launching Pokemon Emerald Flow for the first time, all game options
will be **RESET** to their **DEFAULT VALUES**.
This only happens **ONCE**. If you&apos;re curious about
the default settings, head over to the Features section for a complete
overview.
`
}
</AlertMd>
<Md>
{
`
The following pages cover two ways to set up your game:

- [${pages.setup["rom-patcher-js"].title}](${pages.setup["rom-patcher-js"].url})
- [${pages.setup["hack-dex"].title}](${pages.setup["hack-dex"].url})
`
}
</Md>
</>
);
}
