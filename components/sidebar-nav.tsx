"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Database, Play, BarChart3, FileText, Settings, HelpCircle, Activity } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Data",
    href: "/data",
    icon: Database,
  },
  {
    title: "Pipeline",
    href: "/pipeline",
    icon: Play,
  },
  {
    title: "Results",
    href: "/results",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
]

const bottomNavItems = [
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-foreground">GenomePipe</span>
            <span className="text-xs text-muted-foreground">v2.4.1</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent/50 hover:text-accent-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>

      <div className="border-t border-border p-4">
        <div className="rounded-lg bg-muted p-3">
          <p className="text-xs font-medium text-foreground">System Status</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-sidebar-border space-y-1">
        {bottomNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
