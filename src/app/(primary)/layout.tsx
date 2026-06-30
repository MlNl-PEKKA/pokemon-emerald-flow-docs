import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { cn } from "~/lib/utils";
import { TooltipProvider } from "~/components/ui/tooltip";
import { ThemeProvider } from "~/components/theme-provider";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { AppSidebar } from "~/components/app-sidebar";
import { ModeToggle } from "~/components/mode-toggle";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider>
      <AppSidebar variant="floating" />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-16 items-center px-4">
          <SidebarTrigger
            variant="outline"
            className="dark:bg-sidebar/95 sidebar-toggle"
            popoverTarget="no-js-sidebar"
          />
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
