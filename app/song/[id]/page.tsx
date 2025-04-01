"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Share2, MessageCircle } from "lucide-react"

export default function SongDetailPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const router = useRouter()

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleLike = () => {
    setIsLiked(!isLiked)
  }

  return (
    <main className="flex flex-col p-4">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
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
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </Button>
        <h1 className="text-xl font-bold">Now Playing</h1>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div className="relative h-64 w-64 rounded-lg overflow-hidden">
          <img src="/placeholder.svg?height=256&width=256" alt="Track cover" className="h-full w-full object-cover" />
        </div>

        <div className="mt-4 text-center">
          <h2 className="text-xl font-bold">When City Lights</h2>
          <p className="text-sm text-muted-foreground">Marius Bliss</p>
        </div>

        <div className="mt-6 w-full">
          <div className="h-1 w-full bg-muted rounded-full">
            <div className="h-full w-[35%] bg-primary rounded-full"></div>
          </div>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">1:15</span>
            <span className="text-xs text-muted-foreground">3:45</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-6">
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <SkipBack className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="h-14 w-14 rounded-full" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-7 w-7" /> : <Play className="h-7 w-7 ml-1" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
            <SkipForward className="h-5 w-5" />
          </Button>
        </div>

        <div className="mt-6 flex items-center space-x-2 w-full">
          <Volume2 className="h-4 w-4 text-muted-foreground" />
          <div className="h-1 w-full bg-muted rounded-full">
            <div className="h-full w-[70%] bg-primary rounded-full"></div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-around w-full">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full" onClick={toggleLike}>
            <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-full">
            <Share2 className="h-6 w-6" />
          </Button>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-8 w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm">
                "When City Lights" is a melodic journey through urban nightlife, blending electronic beats with soulful
                vocals. The track captures the essence of city life after dark, with its pulsing rhythm and atmospheric
                synths.
              </p>
              <div className="mt-4">
                <p className="text-xs text-muted-foreground">Released: March 10, 2025</p>
                <p className="text-xs text-muted-foreground">Genre: Electronic / Pop</p>
                <p className="text-xs text-muted-foreground">Duration: 3:45</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="mt-4 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">James David</p>
                    <p className="ml-2 text-xs text-muted-foreground">• Verified Listener</p>
                  </div>
                  <p className="mt-1 text-xs">
                    Your beat has the perfect vibe! I love how the melody flows with the drums. The mix is clean and the
                    arrangement is on point. Keep up the great work!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">Anna Smith</p>
                    <p className="ml-2 text-xs text-muted-foreground">• Verified Listener</p>
                  </div>
                  <p className="mt-1 text-xs">
                    I think the vocals could be a bit louder in the mix. The beat is fire though! The bass hits just
                    right and the overall vibe is amazing.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

