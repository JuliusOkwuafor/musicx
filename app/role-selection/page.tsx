"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function RoleSelectionPage() {
  const [activeRole, setActiveRole] = useState<string | null>(null)
  const router = useRouter()

  const handleRoleSelect = (role: string) => {
    setActiveRole(role)
  }

  const handleContinue = () => {
    if (activeRole === "artist") {
      router.push("/onboarding")
    } else if (activeRole === "listener") {
      router.push("/listener/onboarding")
    }
  }

  return (
    <main className="flex min-h-[100svh] flex-col bg-background p-4">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Get peer to peer feedback on Your Music</h1>
        <p className="mt-2 text-center text-sm text-muted-foreground">
          Artists pay to get their songs listened. Listeners get rewarded for reviews
        </p>

        <div className="mt-8 w-full max-w-md">
          <div className="grid gap-4">
            <Card
              className={`cursor-pointer overflow-hidden border-2 ${
                activeRole === "artist" ? "border-primary" : "border-border"
              }`}
              onClick={() => handleRoleSelect("artist")}
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src="/forartists.png" alt="Artist" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">I'm an Artist</h3>
                    {activeRole === "artist" && (
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check text-white"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card
              className={`cursor-pointer overflow-hidden border-2 ${
                activeRole === "listener" ? "border-primary" : "border-border"
              }`}
              onClick={() => handleRoleSelect("listener")}
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image src="/forlisteners.png" alt="Listener" fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">I'm a Listener</h3>
                    {activeRole === "listener" && (
                      <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-check text-white"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button className="w-full" disabled={!activeRole} onClick={handleContinue}>
              Continue
            </Button>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Already have an account?{" "}
              <a href="/login" className="text-primary hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

