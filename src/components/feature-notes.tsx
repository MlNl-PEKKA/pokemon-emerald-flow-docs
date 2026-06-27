import { NotebookPen } from "lucide-react";
import Image from "next/image";
import type { ComponentProps, PropsWithChildren } from "react";
import type { TailwindColor } from "~/lib/types";

import { cn } from "~/lib/utils";
import { Md } from "./markdown";

export const Note = ({
  children,
  alt,
  src,
}: PropsWithChildren<
  Pick<ComponentProps<typeof Image>, "src" | "alt" | "className">
>) => {
  return (
    <div className="flex flex-row items-center gap-4 py-2">
      <Image src={src} alt={alt} unoptimized priority width={48} height={48} />
      <div className="flex flex-col text-sm [&_strong]:text-lg">{children}</div>
    </div>
  );
};

export const NoteMd = ({
  children,
  ...props
}: Omit<ComponentProps<typeof Note>, "children"> & { children: string }) => {
  return (
    <Note {...props}>
      <Md>{children}</Md>
    </Note>
  );
};

export const FeatureNotes = <T extends TailwindColor>({
  className,
  children,
  bgColor,
  borderColor,
  textColor,
  childBorderColor,
}: PropsWithChildren<{
  className?: string;
  bgColor: `bg-${T}-800`;
  borderColor: `border-${NoInfer<T>}-600`;
  childBorderColor: `[&>div]:not-first:border-${NoInfer<T>}-600`;
  textColor: `text-${NoInfer<T>}-600`;
}>) => {
  return (
    <div
      className={cn(
        "mb-4 w-full rounded-md border",
        bgColor,
        borderColor,
        className,
      )}
    >
      <div
        className={cn(
          "bg-background/90 flex flex-1 flex-col rounded-md p-4 [&>div]:not-first:not-last:border-b [&>p]:mt-2!",
          childBorderColor,
        )}
      >
        <div
          className={cn(
            "flex items-center gap-2 pb-2 text-sm font-bold tracking-wide uppercase",
            textColor,
          )}
        >
          <NotebookPen /> FEATURE NOTES
        </div>
        {children}
      </div>
    </div>
  );
};
FeatureNotes.Note = Note;
FeatureNotes.NoteMd = NoteMd;
