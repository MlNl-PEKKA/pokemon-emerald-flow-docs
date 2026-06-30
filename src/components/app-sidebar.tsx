import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarNoJS,
} from "~/components/ui/sidebar";
import Image from "next/image";
import { menuItems } from "~/lib/menu-items";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { MenuButton } from "./menu-button";
import { logo } from "~/lib/generated/sprites/logo";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <>
      <Sidebar {...props}>
        <AppSidebarContent />
      </Sidebar>
      <SidebarNoJS>
        <AppSidebarContent />
      </SidebarNoJS>
    </>
  );
}

function AppSidebarContent() {
  return (
    <>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg border-2">
                  <Image
                    src={logo}
                    alt="Logo sprite"
                    width={32}
                    height={32}
                    unoptimized
                    priority
                  />
                </div>
                <div className="flex flex-col gap-1 leading-none">
                  <span className="font-medium">Pokemon Emerald Flow</span>
                  <Badge variant={"outline"}>v1.0.0-beta</Badge>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <MenuButton url={item.url}>
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </MenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <MenuButton url={item.url}>
                          <Link href={item.url}>{item.title}</Link>
                        </MenuButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
}
