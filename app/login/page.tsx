"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState<"artist" | "listener" | null>(null)
  const router = useRouter()

  const handleLogin = () => {
    // Handle login logic
    if (userType === "artist") {
      router.push("/dashboard")
    } else if (userType === "listener") {
      router.push("/listener/dashboard")
    }
  }

  return (
    <main className="flex min-h-[100svh] flex-col bg-background p-4">
      <Card className="mx-auto w-full max-w-md border-none bg-transparent shadow-none">
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your SongPay account</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="Enter your password" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>I am a</Label>
              <div className="flex gap-4">
                <Button
                  type="button"
                  variant={userType === "artist" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setUserType("artist")}
                >
                  Artist
                </Button>
                <Button
                  type="button"
                  variant={userType === "listener" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setUserType("listener")}
                >
                  Listener
                </Button>
              </div>
            </div>

            <Button className="w-full" onClick={handleLogin} disabled={!userType}>
              Sign In
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="/role-selection" className="text-primary hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

