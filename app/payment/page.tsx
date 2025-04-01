"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PaymentPage() {
  const router = useRouter()

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Payment Gateway</h1>

      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center">
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
                className="lucide lucide-credit-card"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-xl font-semibold">Payment Gateway</h2>
        <p className="mt-1 text-center text-sm text-muted-foreground">
          For uploading successfully, you need to complete the payment process
        </p>

        <Card className="mt-6 w-full">
          <CardContent className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Upload Fee</span>
                <span className="font-medium">$5.00</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Processing Fee</span>
                <span className="font-medium">$0.50</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-2">
                <span className="font-medium">Total</span>
                <span className="font-medium">$5.50</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Button className="mt-6 w-full" onClick={() => router.push("/dashboard")}>
          Proceed to Payment
        </Button>
      </div>
    </main>
  )
}

