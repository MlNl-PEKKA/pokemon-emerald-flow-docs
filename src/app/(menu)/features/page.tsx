import { pages } from "~/lib/menu-items";

import { MutedLink } from "~/components/muted-link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { featureList } from "~/lib/feature-list";
import { cn, getKebabCase } from "~/lib/utils";
import { AlertMd } from "~/components/alerts";
import { Md } from "~/components/markdown";

export default function Page() {
  // prettier-ignore
  return (
    <>
      <Md>
        {`
## ${pages.features.title}

**Pokemon Emerald Flow** includes a variety of optional
enhancement features designed to reduce unnecessary friction while
preserving the original Emerald experience.

When starting a new game, all options are initialized to their default
values. These defaults are intended to provide a clean slate start
similar to that of the original _Pokémon Emerald_.

Below is a list of features with links to their documentation, 
available options, and the default setting (marked with ✅). 
Each feature has its own dedicated page with further explanations.
`}
      </Md>
      <AlertMd>
        {`
Default settings are applied automatically the first time Pokemon
Emerald Flow is launched. This initialization only happens once.
`}
      </AlertMd>
      <FeaturesTable />
    </>
  );
}

function Option({
  option,
  index,
  className,
}: {
  option: (typeof featureList)[number][1];
  index: number;
  className?: string;
}) {
  const value = option.options[index];

  if (!value) return <TableCell className={className}>-</TableCell>;

  const title = value[0];

  if (title === option.defaultOption)
    return (
      <TableCell
        className={cn(className, "flex flex-1 flex-row justify-between")}
      >
        <span>{title}</span>
        <span>✅</span>
      </TableCell>
    );

  return <TableCell className={className}>{title}</TableCell>;
}

function FeaturesTable() {
  return (
    <Table className="table-fixed">
      <TableHeader>
        <TableRow>
          <TableHead className="border-r">Feature</TableHead>
          <TableHead className="w-16 border-r text-left md:w-24">
            Opt.1
          </TableHead>
          <TableHead className="w-16 border-r text-left md:w-24">
            Opt.2
          </TableHead>
          <TableHead className="w-16 text-left md:w-24"> Opt.3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {featureList.map(([title, option], i) => (
          <TableRow key={`feature_${i}`}>
            <TableCell className="border-r">
              <MutedLink
                link={{
                  href: `${pages.features[getKebabCase(title)].url}`,
                }}
                muted={{
                  className:
                    "overflow-hidden font-medium text-ellipsis whitespace-nowrap",
                }}
              >
                {title}
              </MutedLink>
            </TableCell>
            {Array.from({ length: 3 }).map((_, j) => (
              <Option
                key={`feature_${i}_option_${j}`}
                className={cn(j != 2 && "border-r")}
                index={j}
                option={option}
              />
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
