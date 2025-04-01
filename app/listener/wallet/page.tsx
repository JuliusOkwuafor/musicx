"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Wallet, ArrowDown, ArrowUp, CreditCard, Clock, X } from "lucide-react"

export default function ListenerWalletPage() {
  const [showTransfer, setShowTransfer] = useState(false)
  const router = useRouter()

  const transactions = [
    {
      id: 1,
      type: "Earned",
      amount: 1.5,
      date: "Mar 10, 2025",
      description: "Review - When City Lights",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      type: "Earned",
      amount: 1.5,
      date: "Mar 5, 2025",
      description: "Review - Gravity",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      type: "Withdrawal",
      amount: -10.0,
      date: "Feb 28, 2025",
      description: "Bank Transfer",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>

      <Card className="bg-gradient-to-r from-primary to-purple-600">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/70">Available Balance</p>
              <h2 className="text-3xl font-bold text-white">$12.50</h2>
              <p className="text-sm text-white/70 mt-1">8 reviews completed</p>
            </div>
            <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center">
              <Wallet className="h-8 w-8 text-white" />
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button className="flex-1 bg-white text-primary hover:bg-white/90" onClick={() => setShowTransfer(true)}>
              Withdraw
              <ArrowUp className="ml-2 h-4 w-4" />
            </Button>
            <Button
              className="flex-1 bg-white/20 text-white hover:bg-white/30 border border-white/30"
              onClick={() => router.push("/listener/music")}
            >
              Earn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {showTransfer ? (
        <Card className="mt-6">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Withdraw Funds</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowTransfer(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Available Balance</p>
                <p className="text-2xl font-bold">$12.50</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Withdrawal Method</label>
                <div className="grid grid-cols-2 gap-2">
                  <Card className="border-primary cursor-pointer">
                    <CardContent className="p-3 flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-primary" />
                      <span className="text-sm">Bank Account</span>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer">
                    <CardContent className="p-3 flex items-center">
                      <Wallet className="h-5 w-5 mr-2" />
                      <span className="text-sm">PayPal</span>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Bank Account</label>
                <select className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm">
                  <option>Select your bank</option>
                  <option>Bank of America</option>
                  <option>Chase</option>
                  <option>Wells Fargo</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Account Number</label>
                <Input placeholder="Enter account number" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input placeholder="0.00" type="number" min="10" className="pl-8" />
                </div>
                <p className="text-xs text-muted-foreground">Minimum withdrawal: $10.00</p>
              </div>

              <Button className="w-full" onClick={() => router.push("/listener/wallet/confirm")}>
                Confirm Withdrawal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <>
          <Tabs defaultValue="transactions" className="mt-6 w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="transactions">Transactions</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>

            <TabsContent value="transactions" className="mt-4 space-y-4">
              {transactions.map((transaction) => (
                <Card key={transaction.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`h-10 w-10 rounded-full ${transaction.type === "Earned" ? "bg-green-500/20" : "bg-primary/20"} flex items-center justify-center`}
                        >
                          {transaction.type === "Earned" ? (
                            <ArrowDown className="h-5 w-5 text-green-500" />
                          ) : (
                            <ArrowUp className="h-5 w-5 text-primary" />
                          )}
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium">{transaction.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {transaction.date}
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          transaction.type === "Earned" ? "text-green-500" : "text-primary"
                        }`}
                      >
                        {transaction.type === "Earned" ? "+" : ""}${Math.abs(transaction.amount).toFixed(2)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="pending" className="mt-4">
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium">No Pending Transactions</h3>
                <p className="text-sm text-muted-foreground mt-1">All your transactions have been processed</p>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <ArrowUp className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">Withdraw</p>
                  <p className="text-xs text-muted-foreground">To Bank Account</p>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => router.push("/listener/music")}
              >
                <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                    <ArrowDown className="h-6 w-6 text-green-500" />
                  </div>
                  <p className="text-sm font-medium">Earn More</p>
                  <p className="text-xs text-muted-foreground">Review Music</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </>
      )}
    </main>
  )
}

