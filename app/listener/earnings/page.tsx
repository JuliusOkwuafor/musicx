"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ListenerEarningsPage() {
  const earnings = [
    {
      id: 1,
      track: "When City Lights",
      artist: "Marius Bliss",
      amount: 1.5,
      date: "Mar 10, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      track: "Gravity",
      artist: "Marius Bliss",
      amount: 1.5,
      date: "Mar 5, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      track: "Summer Nights",
      artist: "Marius Bliss",
      amount: 1.5,
      date: "Feb 28, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      track: "Midnight Drive",
      artist: "Marius Bliss",
      amount: 1.5,
      date: "Feb 20, 2025",
      image: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Earnings</h1>

      <Card className="mt-6">
        <CardContent className="p-4">
          <h3 className="text-lg font-medium">Earnings Overview</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Total Earnings</span>
              <span className="font-medium">$45.50</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-muted">
              <div className="h-full w-[45%] rounded-full bg-primary"></div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">This Month</p>
              <p className="text-lg font-bold">$12.50</p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">Last Month</p>
              <p className="text-lg font-bold">$33.00</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="mt-6 w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {earnings.map((earning) => (
            <Card key={earning.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md">
                      <AvatarImage src={earning.image} alt={earning.track} />
                      <AvatarFallback className="rounded-md">MB</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{earning.track}</p>
                      <p className="text-xs text-muted-foreground">
                        {earning.artist} • {earning.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-green-500">+${earning.amount.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="mt-4 space-y-4">
          {earnings.slice(0, 2).map((earning) => (
            <Card key={earning.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md">
                      <AvatarImage src={earning.image} alt={earning.track} />
                      <AvatarFallback className="rounded-md">MB</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{earning.track}</p>
                      <p className="text-xs text-muted-foreground">
                        {earning.artist} • {earning.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                    <p className="text-sm font-medium text-green-500">+${earning.amount.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="paid" className="mt-4 space-y-4">
          {earnings.slice(2, 4).map((earning) => (
            <Card key={earning.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 rounded-md">
                      <AvatarImage src={earning.image} alt={earning.track} />
                      <AvatarFallback className="rounded-md">MB</AvatarFallback>
                    </Avatar>
                    <div className="ml-3">
                      <p className="text-sm font-medium">{earning.track}</p>
                      <p className="text-xs text-muted-foreground">
                        {earning.artist} • {earning.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                    <p className="text-sm font-medium text-green-500">+${earning.amount.toFixed(2)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      <Button className="mt-6 w-full">Withdraw Earnings</Button>
    </main>
  )
}

