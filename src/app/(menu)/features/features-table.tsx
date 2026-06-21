import { MutedLink } from "~/components/muted-link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { features } from "~/lib/feature-list";
import { pages } from "~/lib/menu-items";
import { cn, getKebabCase } from "~/lib/utils";

const Option = ({
  option,
  index,
  className,
}: {
  option: (typeof features)[number][1];
  index: number;
  className?: string;
}) => {
  const value = option.options[index];

  if (!value) return <TableCell className={className}>-</TableCell>;

  if (value === option.defaultOption)
    return (
      <TableCell
        className={cn(className, "flex flex-1 flex-row justify-between")}
      >
        <span>{value}</span>
        <span>✅</span>
      </TableCell>
    );

  return <TableCell className={className}>{value}</TableCell>;
};

export const FeaturesTable = () => {
  return (
    <Table className="mt-6 table-fixed">
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
        {features.map(([title, option], i) => (
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
};
