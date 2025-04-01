import type React from "react"
import { NavigationBar } from "@/components/navigation-bar"

export default function HelpLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100svh] flex-col bg-background pb-16">
      {children}
      <NavigationBar />
    </div>
  )
}

