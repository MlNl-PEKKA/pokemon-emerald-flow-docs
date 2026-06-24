"use client";

import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { SidebarMenuSubButton } from "./ui/sidebar";

export function MenuButton(props: PropsWithChildren<{ url: string }>) {
  const pathname = usePathname();
  return (
    <SidebarMenuSubButton asChild isActive={props.url === pathname}>
      {props.children}
    </SidebarMenuSubButton>
  );
}
