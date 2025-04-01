"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Search, PlusCircle, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function NavigationBar() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      icon: Home,
      label: "Home",
      href: "/dashboard",
    },
    {
      icon: Search,
      label: "Search",
      href: "/search",
    },
    {
      icon: PlusCircle,
      label: "Add",
      href: "/add-song",
    },
    {
      icon: User,
      label: "Profile",
      href: "/profile",
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background">
      <nav className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={cn(
                "flex flex-1 flex-col items-center justify-center py-2 text-xs",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <item.icon className={cn("mb-1 h-6 w-6", isActive && "fill-primary")} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

