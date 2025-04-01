"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { Headphones, Wallet, Star } from "lucide-react"

export default function ListenerDashboardPage() {
  const router = useRouter()

  const tracks = [
    {
      id: 1,
      title: "Willow Cry",
      artist: "Sarah James",
      duration: "3:45",
      reward: "$1.50",
      image: "/latestupload image.png",
    },
    {
      id: 2,
      title: "Summer Nights",
      artist: "The Dreamers",
      duration: "4:20",
      reward: "$1.50",
      image: "/latestupload image.png",
    },
    {
      id: 3,
      title: "City Lights",
      artist: "Urban Sound",
      duration: "3:30",
      reward: "$1.50",
      image: "/latestupload image.png",
    },
  ]

  return (
    <main className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src="/profileimage.png" alt="@username" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-medium">John Smith</h2>
            <p className="text-xs text-muted-foreground">Listener</p>
          </div>
        </div>
        <Card className="bg-primary/10 p-2 cursor-pointer" onClick={() => router.push("/listener/wallet")}>
          <p className="text-xs font-medium flex items-center">
            <Wallet className="h-3 w-3 mr-1" />
            Balance: <span className="text-primary ml-1">$12.50</span>
          </p>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="p-4">
          <h3 className="text-lg font-medium">Earnings Overview</h3>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <span className="text-sm">Monthly Goal</span>
              <span className="text-sm font-medium">$12.50 / $50.00</span>
            </div>
            <Progress value={25} className="mt-2 h-2" />
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">Reviews This Month</p>
              <p className="text-lg font-bold">8</p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <p className="text-xs text-muted-foreground">Total Earned</p>
              <p className="text-lg font-bold">$45.50</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-6">
        <h3 className="text-lg font-medium mb-3">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          <Card
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => router.push("/listener/music")}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                <Headphones className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm font-medium">Discover Music</p>
              <p className="text-xs text-muted-foreground">Find new tracks</p>
            </CardContent>
          </Card>

          <Card
            className="cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => router.push("/listener/wallet")}
          >
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                <Wallet className="h-6 w-6 text-green-500" />
              </div>
              <p className="text-sm font-medium">Wallet</p>
              <p className="text-xs text-muted-foreground">Manage earnings</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">New Tracks to Review</h3>
          <Button variant="link" size="sm" className="text-primary" onClick={() => router.push("/listener/music")}>
            View All
          </Button>
        </div>
        <div className="mt-2 space-y-2">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className="overflow-hidden cursor-pointer hover:bg-accent/50 transition-colors"
              onClick={() => router.push(`/listener/music/${track.id}`)}
            >
              <CardContent className="p-0">
                <div className="flex items-center p-3">
                  <div className="h-10 w-10 rounded-md overflow-hidden">
                    <img
                      src={track.image || "/placeholder.svg"}
                      alt={track.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{track.title}</p>
                    <p className="text-xs text-muted-foreground">{track.artist}</p>
                  </div>
                  <div className="ml-auto flex flex-col items-end">
                    <p className="text-sm font-medium text-primary">{track.reward}</p>
                    <p className="text-xs text-muted-foreground">{track.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Recent Reviews</h3>
          <Button variant="link" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <Card
          className="mt-2 cursor-pointer hover:bg-accent/50 transition-colors"
          onClick={() => router.push("/listener/review/history")}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-md overflow-hidden">
                  <img src="/feedbackusericon.png" alt="Track cover" className="h-full w-full object-cover" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">Gravity</p>
                  <p className="text-xs text-muted-foreground">Marius Bliss</p>
                </div>
              </div>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 mr-1 fill-yellow-500" />
                <span className="text-sm font-medium">4.5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

