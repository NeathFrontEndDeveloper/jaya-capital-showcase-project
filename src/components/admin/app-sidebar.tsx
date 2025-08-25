"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Home,
  Users,
  FileText,
  TrendingUp,
  Settings,
  LogOut,
  ChevronDown,
  Hammer,
  DollarSign,
  Calendar,
  User,
  Bell,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

// Main navigation items
const navigationItems = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Properties",
    icon: Building2,
    items: [
      {
        title: "All Properties",
        url: "/admin/properties",
      },
      {
        title: "Available Rentals",
        url: "/admin/properties/rentals",
      },
      {
        title: "Under Renovation",
        url: "/admin/properties/renovation",
      },
      {
        title: "Add Property",
        url: "/admin/properties/new",
      },
    ],
  },
  {
    title: "Projects",
    icon: Hammer,
    items: [
      {
        title: "Active Projects",
        url: "/admin/projects",
      },
      {
        title: "Project Timeline",
        url: "/admin/projects/timeline",
      },
      {
        title: "Contractors",
        url: "/admin/projects/contractors",
      },
    ],
  },
  {
    title: "Tenants",
    url: "/admin/tenants",
    icon: Users,
  },
  {
    title: "Finances",
    icon: DollarSign,
    items: [
      {
        title: "Revenue Overview",
        url: "/admin/finances",
      },
      {
        title: "Expenses",
        url: "/admin/finances/expenses",
      },
      {
        title: "Reports",
        url: "/admin/finances/reports",
      },
    ],
  },
];

// Secondary navigation items
const secondaryItems = [
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: TrendingUp,
  },
  {
    title: "Documents",
    url: "/admin/documents",
    icon: FileText,
  },
  {
    title: "Calendar",
    url: "/admin/calendar",
    icon: Calendar,
  },
  {
    title: "Notifications",
    url: "/admin/notifications",
    icon: Bell,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActiveLink = (url: string) => {
    if (url === "/admin") {
      return pathname === "/admin";
    }
    return pathname?.startsWith(url);
  };

  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold text-lg">
            JC
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">Jaya Capital</span>
            <span className="text-xs text-gray-500">Admin Portal</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.items ? (
                    <Collapsible
                      open={openItems.includes(item.title)}
                      onOpenChange={() => toggleItem(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton className="w-full justify-between hover:bg-gray-50 data-[state=open]:bg-gray-50">
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={isActiveLink(subItem.url)}
                              >
                                <Link
                                  href={subItem.url}
                                  className={`${
                                    isActiveLink(subItem.url)
                                      ? "bg-amber-50 text-amber-700 border-r-2 border-amber-600"
                                      : "text-gray-700 hover:bg-gray-50"
                                  }`}
                                >
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      isActive={isActiveLink(item.url!)}
                    >
                      <Link
                        href={item.url!}
                        className={`flex items-center gap-3 ${
                          isActiveLink(item.url!)
                            ? "bg-amber-50 text-amber-700 border-r-2 border-amber-600"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Secondary Navigation */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
            Tools & Reports
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-gray-100 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-50">
              <Link
                href="/admin/settings"
                className="flex items-center gap-3 text-gray-700"
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="hover:bg-gray-50">
              <Link
                href="/admin/profile"
                className="flex items-center gap-3 text-gray-700"
              >
                <User className="h-4 w-4" />
                <span>Profile</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
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
                Admin User
              </p>
              <p className="text-xs text-gray-500 truncate">
                admin@jayacapital.com
              </p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
