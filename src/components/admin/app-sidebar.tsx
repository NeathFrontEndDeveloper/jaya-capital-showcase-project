"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LogOut, Hammer } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Main navigation items
const navigationItems = [
  {
    title: "Dashboard",
    url: "/private",
    icon: Home,
  },
  {
    title: "Projects",
    icon: Hammer,
    url: "/project-admin",
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActiveLink = (url: string) => {
    if (url === "/private") {
      return pathname === "/private";
    }
    return pathname?.startsWith(url);
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold text-lg">
            JC
          </div> */}
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Jaya Capital</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveLink(item.url!)}>
                    <Link
                      href={item.url!}
                      className={`flex items-center gap-3 w-full ${
                        isActiveLink(item.url!)
                          ? "bg-amber-50 text-amber-700 border-r-2 border-amber-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        {/* <SidebarGroup className="mt-8"> */}
        {/* <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Tools & Reports
          </SidebarGroupLabel> */}
        {/* <SidebarGroupContent> */}
        {/* <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActiveLink(item.url)}>
                    <Link
                      href={item.url}
                      className={`flex items-center gap-3 ${
                        isActiveLink(item.url)
                          ? "bg-amber-50 text-amber-700 border-r-2 border-amber-600"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu> */}
        {/* </SidebarGroupContent> */}
        {/* </SidebarGroup> */}
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 p-4">
        <SidebarMenu>
          {/* <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-50">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 text-gray-700"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem> */}
          {/* <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-50">
              <Link
                href="/admin/profile"
                className="flex items-center gap-3 text-gray-700"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem> */}
          <SidebarMenuItem>
            <SidebarMenuButton className="text-red-600 hover:bg-red-50 hover:text-red-700">
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* User Info */}
        <div className="mt-4 px-3 py-2 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-amber-600 text-white flex items-center justify-center text-sm font-medium">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                Admin Jaya
              </p>
              <p className="text-xs text-gray-500 truncate">
                admin@jaya-capital.local
              </p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
