import type { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { cn } from "~/lib/utils";

export function H1(props: PropsWithChildren<ComponentPropsWithoutRef<"h1">>) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
        props.className,
      )}
    >
      {props.children}
    </h1>
  );
}

export function H2(props: PropsWithChildren<ComponentPropsWithoutRef<"h2">>) {
  return (
    <h2
      {...props}
      className={cn(
        "w-full scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        props.className,
      )}
    >
      {props.children}
    </h2>
  );
}

export function H3(props: PropsWithChildren<ComponentPropsWithoutRef<"h3">>) {
  return (
    <h3
      {...props}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h3>
  );
}

export function H4(props: PropsWithChildren<ComponentPropsWithoutRef<"h4">>) {
  return (
    <h4
      {...props}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className,
      )}
    >
      {props.children}
    </h4>
  );
}

export function P(props: PropsWithChildren<ComponentPropsWithoutRef<"p">>) {
  return (
    <p
      {...props}
      className={cn(
        "leading-7 text-pretty hyphens-auto not-first:mt-6",
        props.className,
      )}
    >
      {props.children}
    </p>
  );
}

export function Blockquote(
  props: PropsWithChildren<ComponentPropsWithoutRef<"blockquote">>,
) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
    >
      {props.children}
    </blockquote>
  );
}

export function List(props: PropsWithChildren<ComponentPropsWithoutRef<"ul">>) {
  return (
    <ul
      {...props}
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}
    >
      {props.children}
    </ul>
  );
}

export function InlineCode(
  props: PropsWithChildren<ComponentPropsWithoutRef<"code">>,
) {
  return (
    <code
      {...props}
      className={cn(
        "bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        props.className,
      )}
    >
      {props.children}
    </code>
  );
}

export function Lead(props: PropsWithChildren<ComponentPropsWithoutRef<"p">>) {
  return (
    <p
      {...props}
      className={cn("text-muted-foreground text-xl", props.className)}
    >
      {props.children}
    </p>
  );
}

export function Large(
  props: PropsWithChildren<ComponentPropsWithoutRef<"div">>,
) {
  return (
    <div className={cn("text-lg font-semibold", props.className)}>
      {props.children}
    </div>
  );
}

export function Small(
  props: PropsWithChildren<ComponentPropsWithoutRef<"small">>,
) {
  return (
    <small
      {...props}
      className={cn("text-sm leading-none font-medium", props.className)}
    >
      {props.children}
    </small>
  );
}

export function Muted(props: PropsWithChildren<ComponentPropsWithoutRef<"p">>) {
  return (
    <p
      {...props}
      className={cn("text-muted-foreground text-sm", props.className)}
    >
      {props.children}
    </p>
  );
}
