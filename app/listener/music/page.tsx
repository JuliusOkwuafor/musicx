"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ListenerMusicPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const categories = ["Hip Hop", "Pop", "R&B", "Rock", "Electronic", "Jazz", "Classical", "Country"]

  const songs = [
    {
      id: 1,
      title: "Willow Cry",
      artist: "Sarah James",
      duration: "3:45",
      reward: "$1.50",
      image: "/songsimages.png",
    },
    {
      id: 2,
      title: "Summer Nights",
      artist: "The Dreamers",
      duration: "4:20",
      reward: "$1.50",
      image: "/songsimages.png",
    },
    {
      id: 3,
      title: "City Lights",
      artist: "Urban Sound",
      duration: "3:30",
      reward: "$1.50",
      image: "/songsimages.png",
    },
    {
      id: 4,
      title: "Ocean Waves",
      artist: "Chill Vibes",
      duration: "5:15",
      reward: "$1.50",
      image: "/songsimages.png",
    },
  ]

  const handleSongClick = (songId: number) => {
    router.push(`/listener/music/${songId}`)
  }

  return (
    <main className="flex flex-col p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search songs..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm" className="rounded-full">
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">New Songs</h3>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {songs.map((song) => (
            <Card
              key={song.id}
              className="overflow-hidden hover:bg-accent cursor-pointer transition-colors"
              onClick={() => handleSongClick(song.id)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square">
                  <div className="h-full w-full">
                    <img
                      src={song.image || "/placeholder.svg"}
                      alt={song.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                    <p className="text-sm font-medium text-white">{song.title}</p>
                    <p className="text-xs text-white/70">{song.artist}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-2">
                  <span className="text-xs text-muted-foreground">{song.duration}</span>
                  <span className="text-xs font-medium text-primary">{song.reward}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

