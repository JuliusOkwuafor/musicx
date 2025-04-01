import type React from "react"
import { ListenerNavigationBar } from "@/components/listener-navigation-bar"

export default function ListenerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[100svh] flex-col bg-background pb-16">
      {children}
      <ListenerNavigationBar />
    </div>
  )
}

