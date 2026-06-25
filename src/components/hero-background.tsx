import type { TailwindColor } from "~/lib/types";
import { cn } from "~/lib/utils";

export function HeroBackground({
  blobBgColor,
  blobTranslateX,
  blobTranslateY,
  blobSize,
}: {
  blobBgColor?: `bg-${TailwindColor}-500`;
  blobTranslateX?: `translate-x-[calc(-50%-${number}px)]`;
  blobTranslateY?: `translate-y-[calc(-50%-${number}px)]`;
  blobSize?: `size-[${number}px]`;
}) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 size-50 translate-x-[calc(-50%-0px)] translate-y-[calc(-50%-0px)] rounded-full bg-green-500 opacity-60 blur-[48px] dark:opacity-20",
        blobBgColor,
        blobTranslateX,
        blobTranslateY,
        blobSize,
      )}
    />
  );
}
