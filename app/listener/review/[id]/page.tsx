"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Star } from "lucide-react"

export default function ReviewPage({ params }: { params: { id: string } }) {
  const [rating, setRating] = useState(0)
  const [feedback, setFeedback] = useState("")
  const router = useRouter()

  // Simulate that the user has listened to the track
  useEffect(() => {
    // In a real app, you'd verify the user has actually listened to the track
    // before allowing them to submit a review
  }, [])

  const handleSubmit = () => {
    // Submit feedback
    router.push("/listener/dashboard")
  }

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Submit Review</h1>

      <div className="mt-4 flex items-center">
        <Avatar className="h-12 w-12 rounded-md">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Track cover" />
          <AvatarFallback className="rounded-md">WC</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h2 className="text-lg font-semibold">Willow Cry</h2>
          <p className="text-sm text-muted-foreground">Sarah James</p>
        </div>
      </div>

      <Card className="mt-6">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Rate this track</h3>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setRating(star)} className="p-1">
                      <Star
                        className={`h-8 w-8 ${
                          rating >= star ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <span className="text-lg font-bold">{rating}/5</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Production Quality</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Lyrics & Vocals</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Originality</h3>
              <Slider defaultValue={[50]} max={100} step={1} />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Poor</span>
                <span>Excellent</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Your Feedback</h3>
              <Textarea
                placeholder="What did you think about this track? Be specific and constructive."
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Button className="mt-6 w-full" onClick={handleSubmit} disabled={rating === 0 || feedback.length < 10}>
        Submit Review & Earn $1.50
      </Button>
    </main>
  )
}

