import {
  CircleAlert,
  Lightbulb,
  MessageSquareWarning,
  OctagonAlert,
  TriangleAlert,
} from "lucide-react";
import type { PropsWithChildren } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const defaultVariant = "note" as const satisfies keyof AlertToColor;

type Properties = {
  background: "bg";
  text: "text";
};

type AlertToColor = {
  note: "blue";
  tip: "green";
  important: "purple";
  warning: "yellow";
  caution: "red";
};

type Variants<T extends keyof Properties> = {
  [k in keyof AlertToColor]: `${Properties[T]}-${AlertToColor[k]}-800`;
};

const backgroundVariants = cva("pl-1 w-full mt-8", {
  variants: {
    variant: {
      caution: "bg-red-800",
      important: "bg-purple-800",
      note: "bg-blue-800",
      tip: "bg-green-800",
      warning: "bg-yellow-800",
    } satisfies Variants<"background">,
  },
  defaultVariants: {
    variant: defaultVariant,
  },
});

const textVariant = cva(
  "flex items-center gap-2 text-sm font-bold tracking-wide uppercase",
  {
    variants: {
      variant: {
        caution: "text-red-800",
        important: "text-purple-800",
        note: "text-blue-800",
        tip: "text-green-800",
        warning: "text-yellow-800",
      } satisfies Variants<"text">,
    },
    defaultVariants: {
      variant: defaultVariant,
    },
  },
);

type Props = VariantProps<typeof backgroundVariants> & { className?: string };

const VariantIcon = ({ variant }: Props) => {
  switch (variant) {
    case "note":
      return <CircleAlert />;
    case "important":
      return <MessageSquareWarning />;
    case "caution":
      return <OctagonAlert />;
    case "warning":
      return <TriangleAlert />;
    case "tip":
      return <Lightbulb />;
    default:
      variant satisfies null | undefined;
      throw new Error(`Unhandled variant: ${variant}`);
  }
};

export const Alert = ({
  variant = defaultVariant,
  className,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={cn(backgroundVariants({ variant, className }))}>
      <div className="bg-background/80 flex flex-1 flex-col p-4 [&>p]:mt-2!">
        <div className={cn(textVariant({ variant }))}>
          <VariantIcon variant={variant} />
          {variant}
        </div>
        {children}
      </div>
    </div>
  );
};

export const Caution = ({ children }: PropsWithChildren) => (
  <Alert variant="caution">{children}</Alert>
);

export const Important = ({ children }: PropsWithChildren) => (
  <Alert variant="important">{children}</Alert>
);

export const Note = ({ children }: PropsWithChildren) => (
  <Alert variant="note">{children}</Alert>
);

export const Tip = ({ children }: PropsWithChildren) => (
  <Alert variant="tip">{children}</Alert>
);

export const Warning = ({ children }: PropsWithChildren) => (
  <Alert variant="warning">{children}</Alert>
);
