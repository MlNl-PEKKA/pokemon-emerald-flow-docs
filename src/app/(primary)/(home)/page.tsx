import { HeroImage } from "~/components/hero";
import { Md } from "~/components/markdown";
import { Badge } from "~/components/ui/badge";
import { logo } from "~/lib/generated/sprites/logo";

export default function Page() {
  // prettier-ignore
  return (
<>
<HeroImage
src={logo}
alt="Logo sprite"
/>
<Md>
{
`
# Pokemon Emerald Flow
`  
}  
</Md>   
<Badge variant={"outline"}>v1.0.0-beta</Badge>
</>
);
}
