"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ConfirmWithdrawalPage() {
  const [pin, setPin] = useState(["", "", "", "", "", ""])
  const router = useRouter()

  const handlePinChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newPin = [...pin]
      newPin[index] = value
      setPin(newPin)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`pin-${index + 1}`)
        nextInput?.focus()
      }
    }
  }

  const handleSubmit = () => {
    // Verify PIN and process withdrawal
    router.push("/listener/wallet/success")
  }

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Confirm Withdrawal</h1>

      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div className="text-center">
              <h2 className="text-lg font-medium">Enter PIN</h2>
              <p className="text-sm text-muted-foreground">Enter your 6-digit PIN to confirm withdrawal</p>
            </div>

            <div className="flex justify-center gap-2">
              {pin.map((digit, index) => (
                <Input
                  key={index}
                  id={`pin-${index}`}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handlePinChange(index, e.target.value)}
                  className="h-12 w-12 text-center text-lg [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
                <Button
                  key={number}
                  variant="outline"
                  className="h-12 text-lg"
                  onClick={() => {
                    const emptyIndex = pin.findIndex((digit) => digit === "")
                    if (emptyIndex !== -1) {
                      handlePinChange(emptyIndex, number.toString())
                    }
                  }}
                >
                  {number}
                </Button>
              ))}
              <Button
                variant="outline"
                className="h-12 text-lg"
                onClick={() => {
                  const lastFilledIndex = pin.map((digit) => digit !== "").lastIndexOf(true)
                  if (lastFilledIndex !== -1) {
                    handlePinChange(lastFilledIndex, "")
                  }
                }}
              >
                ←
              </Button>
              <Button
                variant="outline"
                className="h-12 text-lg"
                onClick={() => {
                  const emptyIndex = pin.findIndex((digit) => digit === "")
                  if (emptyIndex !== -1) {
                    handlePinChange(emptyIndex, "0")
                  }
                }}
              >
                0
              </Button>
              <Button variant="outline" className="h-12 text-lg" onClick={() => setPin(["", "", "", "", "", ""])}>
                C
              </Button>
            </div>

            <Button className="w-full" disabled={pin.includes("")} onClick={handleSubmit}>
              Confirm
            </Button>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

