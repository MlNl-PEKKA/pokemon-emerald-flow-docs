import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";

import { Md } from "./markdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Ban } from "lucide-react";

export const Option = ({
  children,
  alt,
  src,
  isDefault = false,
}: PropsWithChildren<
  Pick<ComponentProps<typeof Image>, "src" | "alt" | "className"> & {
    isDefault?: boolean;
  }
>) => {
  return (
    <TableRow className="hover:bg-background pointer-events-none">
      <TableCell className="border-r">
        <div className="flex flex-col text-sm [&_strong]:text-lg">
          {children}
        </div>
      </TableCell>
      <TableCell className="border-r text-center">
        {isDefault ? "✅" : "-"}
      </TableCell>
      <TableCell>
        <div className="bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 pointer-events-auto flex cursor-pointer flex-col items-center gap-1 rounded-md border p-4 text-center text-wrap">
          <div className="relative flex items-center justify-center grayscale">
            <Image
              src={src}
              alt={alt}
              unoptimized
              loading="lazy"
              width={48}
              height={48}
            />
            {isDefault && (
              <Ban className="absolute scale-250 opacity-50" strokeWidth={1} />
            )}
          </div>
          <>{!isDefault ? "Coming soon!" : "No demo"}</>
        </div>
      </TableCell>
    </TableRow>
  );
};

export const OptionMd = ({
  children,
  ...props
}: Omit<ComponentProps<typeof Option>, "children"> & { children: string }) => {
  return (
    <Option {...props}>
      <Md>{children}</Md>
    </Option>
  );
};

export const Options = (props: PropsWithChildren) => {
  return (
    <Table className="min-w-77 table-fixed">
      <TableHeader>
        <TableRow className="pointer-events-none">
          <TableHead className="border-r text-2xl font-semibold tracking-tight">
            Options
          </TableHead>
          <TableHead className="w-[20%] border-r text-center md:w-[15%]">
            Default
          </TableHead>
          <TableHead className="w-[40%] text-center">Gameplay Demo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{props.children}</TableBody>
    </Table>
  );
};
Options.Option = Option;
Options.OptionMd = OptionMd;
