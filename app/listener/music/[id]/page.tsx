"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ChevronDown, Heart, SkipBack, Play, Pause, SkipForward, Volume2, Share2 } from "lucide-react"

export default function MusicPlayerPage({ params }: { params: { id: string } }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isLiked, setIsLiked] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        setDuration(audioRef.current?.duration || 0)
      })

      audioRef.current.addEventListener("timeupdate", () => {
        setCurrentTime(audioRef.current?.currentTime || 0)
      })
    }
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause()
        } else {
          // Create a promise that will resolve when play() succeeds or catch if it fails
          const playPromise = audioRef.current.play()

          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Playback started successfully
              })
              .catch((error) => {
                console.log("Playback failed:", error)
                // For demo purposes, we'll still toggle the play state
                // In a real app, you'd want to show an error message
              })
          }
        }
        setIsPlaying(!isPlaying)
      } catch (error) {
        console.log("Error controlling audio:", error)
      }
    }
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handleTimeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
      setVolume(value[0])
    }
  }

  useEffect(() => {
    // If audio is playing but we don't have a real audio file,
    // simulate time updates for demo purposes
    let interval: NodeJS.Timeout | null = null

    if (isPlaying && duration > 0) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const newTime = prev + 1
          if (newTime >= duration) {
            setIsPlaying(false)
            return 0
          }
          return newTime
        })
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isPlaying, duration])

  return (
    <main className="flex min-h-[100svh] flex-col bg-gradient-to-b from-primary/20 to-background p-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ChevronDown className="h-6 w-6" />
        </Button>
        <h1 className="text-lg font-medium">Now Playing</h1>
        <Button variant="ghost" size="icon">
          <Share2 className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-8 flex flex-1 flex-col items-center">
        <Card className="aspect-square w-full max-w-sm overflow-hidden">
          <CardContent className="p-0">
            <img src="/placeholder.svg?height=400&width=400" alt="Album art" className="h-full w-full object-cover" />
          </CardContent>
        </Card>

        <div className="mt-8 w-full max-w-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">Willow Cry</h2>
              <p className="text-sm text-muted-foreground">Sarah James</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsLiked(!isLiked)}>
              <Heart className={`h-6 w-6 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
          </div>

          <div className="mt-4">
            <audio
              ref={audioRef}
              onError={(e) => {
                console.log("Audio failed to load:", e)
                // Set a reasonable duration for demo purposes when audio fails to load
                setDuration(180) // 3 minutes
              }}
            >
              {/* Provide multiple sources for better compatibility */}
              <source src="/audio-placeholder.mp3" type="audio/mpeg" />
              <source src="/audio-placeholder.ogg" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <Slider value={[currentTime]} max={duration} step={1} onValueChange={handleTimeChange} className="mt-2" />
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <SkipBack className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" className="h-16 w-16 rounded-full" onClick={togglePlay}>
              {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 pl-1" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <SkipForward className="h-6 w-6" />
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <Volume2 className="h-4 w-4 text-muted-foreground" />
            <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} />
          </div>

          <Button className="mt-8 w-full" onClick={() => router.push(`/listener/review/${params.id}`)}>
            Submit Review
          </Button>
        </div>
      </div>
    </main>
  )
}

