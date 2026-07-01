import { Md } from "~/components/markdown";
import { RomPatcher } from "~/components/rom-patcher";
import { pages } from "~/lib/menu-items";

export default function Page() {
  // prettier-ignore
  return (
<>
<Md>
{
`
## ${pages.setup.native.title}

Hack Dex is an online web-based ROM hack patch hosting and patching
platform. Here's a step-by-step process to patch your game with
Hack Dex.
`
}
</Md>
<RomPatcher />
</>
);
}
