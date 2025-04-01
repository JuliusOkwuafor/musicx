"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function WithdrawalSuccessPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/listener/wallet")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="p-6 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
            <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
              <Check className="h-6 w-6" />
            </div>
          </div>

          <h1 className="mt-4 text-2xl font-bold">Withdrawal Successful</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your withdrawal request has been processed successfully. The funds will be credited to your bank account
            within 1-2 business days.
          </p>

          <Button className="mt-6 w-full" onClick={() => router.push("/listener/wallet")}>
            Back to Wallet
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}

