"use client";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Users,
  BarChart3,
  FileText,
  HelpCircle,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// Main navigation items
const mainItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
    badge: null,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
    badge: "12",
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
    badge: null,
  },
  {
    title: "Search",
    url: "/search",
    icon: Search,
    badge: null,
  },
];

// Analytics and reports
const analyticsItems = [
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
    badge: null,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
    badge: null,
  },
];

// Team and collaboration
const teamItems = [
  {
    title: "Team",
    url: "/team",
    icon: Users,
    badge: null,
  },
];

// Support and settings
const supportItems = [
  {
    title: "Help & Support",
    url: "/help",
    icon: HelpCircle,
    badge: null,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    badge: null,
  },
];

interface MenuItemProps {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | null;
  isActive?: boolean;
}

function MenuItem({
  title,
  url,
  icon: Icon,
  badge,
  isActive = false,
}: MenuItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <a href={url} className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Icon className="h-4 w-4" />
            <span>{title}</span>
          </div>
          {badge && (
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[20px] text-center">
              {badge}
            </span>
          )}
        </a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AppSidebar() {
  // In a real app, you'd get this from routing or state management
  const currentPath = "/dashboard";

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <div>
            <h2 className="font-semibold text-lg">AppName</h2>
            <p className="text-xs text-muted-foreground">Workspace</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  isActive={currentPath === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Analytics</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {analyticsItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  isActive={currentPath === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Team</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {teamItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  isActive={currentPath === item.url}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {supportItems.map((item) => (
                <MenuItem
                  key={item.title}
                  {...item}
                  isActive={currentPath === item.url}
                />
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <button className="flex items-center gap-2 w-full text-red-600 hover:text-red-700 hover:bg-red-50">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
