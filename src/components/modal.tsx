import type { PropsWithChildren } from "react";

export function Modal(props: PropsWithChildren) {
  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs">
      {props.children}
    </div>
  );
}
