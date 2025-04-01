"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ListenerPreferencesPage() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const router = useRouter()

  const genres = [
    {
      name: "Pop",
      color: "bg-pink-500",
    },
    {
      name: "Rock",
      color: "bg-purple-500",
    },
    {
      name: "Hip Hop",
      color: "bg-blue-500",
    },
    {
      name: "R&B",
      color: "bg-indigo-500",
    },
    {
      name: "Electronic",
      color: "bg-cyan-500",
    },
    {
      name: "Jazz",
      color: "bg-green-500",
    },
    {
      name: "Classical",
      color: "bg-yellow-500",
    },
    {
      name: "Country",
      color: "bg-orange-500",
    },
  ]

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
  }

  return (
    <main className="flex min-h-[100svh] flex-col p-4">
      <h1 className="text-2xl font-bold">Select Your Favorite Genres</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Choose the genres you'd like to review. You can always change these later.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4">
        {genres.map((genre) => (
          <Card
            key={genre.name}
            className={`cursor-pointer overflow-hidden transition-all ${
              selectedGenres.includes(genre.name) ? "border-2 border-primary" : "border-border"
            }`}
            onClick={() => toggleGenre(genre.name)}
          >
            <CardContent className="p-0">
              <div className={`h-24 ${genre.color}`} />
              <div className="p-4">
                <h3 className="font-medium">{genre.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        className="mt-8 w-full"
        disabled={selectedGenres.length === 0}
        onClick={() => router.push("/listener/dashboard")}
      >
        Continue
      </Button>
    </main>
  )
}

