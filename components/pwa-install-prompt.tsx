"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

// Define the BeforeInstallPromptEvent interface
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>
}

// Extend the Window interface to include deferredPrompt
declare global {
  interface Window {
    deferredPrompt: BeforeInstallPromptEvent | null
  }
}

export function PWAInstallPrompt() {
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
      return
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()

      // Store the event for later use
      window.deferredPrompt = e as BeforeInstallPromptEvent

      // Show our custom install prompt
      console.log("App can be installed, showing prompt")
      setShowPrompt(true)
    }

    // Listen for app installed event
    const handleAppInstalled = () => {
      console.log("App was installed")
      setIsInstalled(true)
      setShowPrompt(false)
      window.deferredPrompt = null
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    window.addEventListener("appinstalled", handleAppInstalled)

    // Debug log
    console.log("PWA install prompt component mounted")

    // Check if deferredPrompt already exists (might have fired before component mounted)
    if (window.deferredPrompt) {
      console.log("Found existing install prompt")
      setShowPrompt(true)
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
      window.removeEventListener("appinstalled", handleAppInstalled)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!window.deferredPrompt) {
      console.log("No installation prompt available")
      return
    }

    // Show the browser install prompt
    console.log("Triggering installation prompt")
    window.deferredPrompt.prompt()

    // Wait for the user to respond to the prompt
    const choiceResult = await window.deferredPrompt.userChoice
    console.log("User choice:", choiceResult.outcome)

    // Clear the saved prompt regardless of outcome
    window.deferredPrompt = null
    setShowPrompt(false)
  }

  const dismissPrompt = () => {
    setShowPrompt(false)
  }

  // Don't show anything if already installed or prompt shouldn't be shown
  if (!showPrompt || isInstalled) return null

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 animate-fade-in">
      <Card className="border-primary/20 bg-background shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-base font-semibold">Install SongPay App</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Install SongPay on your home screen for a better experience
              </p>
              <Button className="mt-3 w-full" onClick={handleInstallClick}>
                Install Now
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="ml-2 h-8 w-8" onClick={dismissPrompt}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

