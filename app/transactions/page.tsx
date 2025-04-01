"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowDown, ArrowUp, Download } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: 1,
      type: "payment",
      amount: 5.5,
      date: "Mar 10, 2025",
      description: "Song Upload - When City Lights",
      status: "completed",
    },
    {
      id: 2,
      type: "payment",
      amount: 5.5,
      date: "Mar 5, 2025",
      description: "Song Upload - Gravity",
      status: "completed",
    },
    {
      id: 3,
      type: "payment",
      amount: 5.5,
      date: "Feb 28, 2025",
      description: "Song Upload - Summer Nights",
      status: "completed",
    },
    {
      id: 4,
      type: "refund",
      amount: 5.5,
      date: "Feb 20, 2025",
      description: "Refund - Upload Failed",
      status: "completed",
    },
  ]

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Transaction History</h1>

      <Tabs defaultValue="all" className="mt-4 w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="payments">Payments</TabsTrigger>
          <TabsTrigger value="refunds">Refunds</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`h-10 w-10 rounded-full ${transaction.type === "payment" ? "bg-red-500/20" : "bg-green-500/20"} flex items-center justify-center`}
                    >
                      {transaction.type === "payment" ? (
                        <ArrowUp
                          className={`h-5 w-5 ${transaction.type === "payment" ? "text-red-500" : "text-green-500"}`}
                        />
                      ) : (
                        <ArrowDown
                          className={`h-5 w-5 ${transaction.type === "payment" ? "text-red-500" : "text-green-500"}`}
                        />
                      )}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{transaction.description}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`text-sm font-medium ${transaction.type === "payment" ? "text-red-500" : "text-green-500"}`}
                    >
                      {transaction.type === "payment" ? "-" : "+"} ${transaction.amount.toFixed(2)}
                    </p>
                    <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="payments" className="mt-4 space-y-4">
          {transactions
            .filter((t) => t.type === "payment")
            .map((transaction) => (
              <Card key={transaction.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <ArrowUp className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-red-500">- ${transaction.amount.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>

        <TabsContent value="refunds" className="mt-4 space-y-4">
          {transactions
            .filter((t) => t.type === "refund")
            .map((transaction) => (
              <Card key={transaction.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <ArrowDown className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium">{transaction.description}</p>
                        <p className="text-xs text-muted-foreground">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-500">+ ${transaction.amount.toFixed(2)}</p>
                      <p className="text-xs text-muted-foreground capitalize">{transaction.status}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </TabsContent>
      </Tabs>

      <Button className="mt-6 w-full" variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download Statement
      </Button>
    </main>
  )
}

