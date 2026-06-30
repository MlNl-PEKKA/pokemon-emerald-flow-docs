import { ExternalLink } from "~/components/external-link";
import { Md } from "~/components/markdown";

import { pages } from "~/lib/menu-items";

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup["rom-patcher-js"].title}
Rom Patcher JS is an online web-based ROM patcher. 
Here's a step-by-step process to patch your game with Rom Patcher JS.
- **Step 1**: Head to Pokemon Emerald Flow's Github repository by using the link mentioned below.
`
}
</Md>
<ExternalLink href="https://www.github.com/officer-kd6-3dot7/pokemon-emerald-flow">
Pokemon Emerald Flow
</ExternalLink>
<Md>
{ 
`
- **Step 2**: Head for the latest release in the **Release** section.
- **Step 3**: Scroll down and under **Assets** download the latest released **pokemon-emerald-flow.ips** file.
- **Step 4**: Head to Rom Patcher JS' website by using the link mentioned below.
`
}
</Md>
<ExternalLink href="https://www.marcrobledo.com/RomPatcher.js">
ROM Patcher JS
</ExternalLink>
<Md>
{ 
`
- **Step 5**: Submit your **Official Pokémon Emerald** ROM as the ROM file.
- **Step 6**: Submit the **pokemon-emerald-flow.ips** file as the Patch file.
- **Step 7**: Click on "Apply patch" and you're done!
`
}
</Md>
</>
);
}
