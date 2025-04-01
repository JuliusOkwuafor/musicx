import { Splash } from "@/components/splash"
import { Suspense } from "react"

export default function Home() {
  return (
    <main className="flex min-h-[100svh] flex-col bg-background">
      <Suspense fallback={<div className="flex-1" />}>
        <Splash />
      </Suspense>
    </main>
  )
}

