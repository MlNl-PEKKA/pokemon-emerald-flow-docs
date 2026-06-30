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
## ${pages.setup["hack-dex"].title}

Hack Dex is an online web-based ROM hack patch hosting and patching
platform. Here's a step-by-step process to patch your game with
Hack Dex.

- **Step 1**: Head to Pokemon Emerald Flow's Hack Dex page by using the link mentioned below.
`
}
</Md>
<ExternalLink href="https://www.hackdex.app/hack/pokemon-emerald-flow">
Hack Dex
</ExternalLink>
<Md>
{ 
`
- **Step 2**: On the main banner, click on "Select Pokémon Emerald ROM".
- **Step 3**: Submit your **Official Pokémon Emerald** ROM as the ROM file.
- **Step 4**:  On the main banner, click on "Agree and Download".
- **Step 5**:  On the main banner, click on "Patch Now" and you're done!
`
}
</Md>
</>
);
}
