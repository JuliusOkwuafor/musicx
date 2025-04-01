"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const tracks = [
    {
      id: 1,
      title: "When City Lights",
      artist: "Marius Bliss",
      duration: "3:45",
      image: "/latestupload image.png",
    },
    {
      id: 2,
      title: "When City Lights",
      artist: "Marius Bliss",
      duration: "3:45",
      image: "/latestupload image.png",
    },
    {
      id: 3,
      title: "When City Lights",
      artist: "Marius Bliss",
      duration: "3:45",
      image: "/latestupload image.png",
    },
    {
      id: 4,
      title: "When City Lights",
      artist: "Marius Bliss",
      duration: "3:45",
      image: "/latestupload image.png",
    },
    {
      id: 5,
      title: "When City Lights",
      artist: "Marius Bliss",
      duration: "3:45",
      image: "/latestupload image.png",
    },
  ]

  return (
    <main className="flex flex-col p-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Recent Searches</h3>
        <div className="mt-2 space-y-2">
          {tracks.map((track) => (
            <Card key={track.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center p-3">
                  <Avatar className="h-10 w-10 rounded-md">
                    <AvatarImage src={track.image} alt={track.title} />
                    <AvatarFallback className="rounded-md">MB</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{track.title}</p>
                    <p className="text-xs text-muted-foreground">{track.artist}</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Review Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {searchQuery === "" && (
        <div className="mt-6 flex flex-col items-center justify-center py-12">
          <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Empty Playlist
            <br />
            Search for tracks to review
          </p>
        </div>
      )}
    </main>
  )
}

