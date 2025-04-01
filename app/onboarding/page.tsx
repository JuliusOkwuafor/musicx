"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"

export default function OnboardingPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleContinue = async () => {
    if (step === 1) {
      // Validate and submit registration
      setStep(2)
    } else if (step === 3) {
      // Verification successful, redirect to dashboard
      router.push("/dashboard")
    }
  }

  return (
    <main className="flex min-h-[100svh] flex-col bg-background p-4">
      {step === 1 && (
        <div className="mb-6">
          <div className="relative mx-auto h-40 w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=160&width=400"
              alt="Colorful abstract art"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      )}

      <Card className="mx-auto w-full max-w-md border-none bg-transparent shadow-none">
        <CardHeader className={step === 1 ? "" : "text-center"}>
          <CardTitle>
            {step === 1 ? "Join as an Artist" : step === 2 ? "Email Verification" : "Email Verified Successfully"}
          </CardTitle>
          <CardDescription>
            {step === 1
              ? "Get real feedback on your music and improve your craft"
              : step === 2
                ? `We have sent a code to your email ${email}`
                : "You can now access your account"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {step === 1 ? (
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" placeholder="Enter your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="artist@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a secure password"
                  />
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
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <Button className="w-full" onClick={handleContinue}>
                {"I'm an Artist"}
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Log in
                </a>
              </p>
            </form>
          ) : step === 2 ? (
            <div className="space-y-4">
              <div className="flex justify-center gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Input
                    key={i}
                    type="text"
                    maxLength={1}
                    className={cn(
                      "h-12 w-12 text-center text-lg [appearance:textfield]",
                      "[&::-webkit-inner-spin-button]:appearance-none",
                      "[&::-webkit-outer-spin-button]:appearance-none",
                    )}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Resend code in <span className="text-primary">01:59</span>
              </p>
              <Button className="w-full" onClick={() => setStep(3)}>
                Verify now
              </Button>
            </div>
          ) : (
            <div className="space-y-4 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-check"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
              </div>
              <Button className="w-full" onClick={handleContinue}>
                Continue
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}

