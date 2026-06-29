import type { ComponentProps } from "react";
import Markdown from "react-markdown";
import Link from "next/link";

export function Md(props: Omit<ComponentProps<typeof Markdown>, "components">) {
  return (
    <Markdown
      {...props}
      components={{
        h1: ({ children, node: _, ...rest }) => (
          <h1
            className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance"
            {...rest}
          >
            {children}
          </h1>
        ),
        h2: ({ children, node: _, ...rest }) => (
          <h2
            className="w-full scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first-of-type:mb-4"
            {...rest}
          >
            {children}
          </h2>
        ),
        h3: ({ children, node: _, ...rest }) => (
          <h3
            className="w-full scroll-m-20 border-b pb-1 text-2xl font-semibold tracking-tight"
            {...rest}
          >
            {children}
          </h3>
        ),
        h4: ({ children, node: _, ...rest }) => (
          <h4
            className="w-full scroll-m-20 text-xl font-semibold tracking-tight"
            {...rest}
          >
            {children}
          </h4>
        ),
        p: ({ children, node: _, ...rest }) => (
          <p {...rest} className="leading-7 text-pretty hyphens-auto">
            {children}
          </p>
        ),
        ul: ({ children, node: _, ...rest }) => (
          <ul
            className="ml-4 flex list-disc flex-col [&>li]:not-last:pb-4"
            {...rest}
          >
            {children}
          </ul>
        ),
        a: ({ href, children }) => (
          <Link
            href={href!}
            className="text-muted-foreground underline underline-offset-2"
          >
            {children}
          </Link>
        ),
      }}
    />
  );
}
