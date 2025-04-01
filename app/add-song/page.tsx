"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

export default function AddSongPage() {
  const [step, setStep] = useState(1)
  const router = useRouter()

  const handleContinue = () => {
    if (step === 1) {
      setStep(2)
    } else if (step === 2) {
      router.push("/payment")
    }
  }

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Add New Song</h1>

      {step === 1 ? (
        <Card className="mt-4 border-none bg-transparent shadow-none">
          <CardContent className="space-y-4 p-0">
            <div className="space-y-2">
              <Label htmlFor="track-cover">Track Cover</Label>
              <div className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-border bg-muted/30">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-primary/20 p-2">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">No File Chosen</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="track-title">Track Title</Label>
              <Input id="track-title" placeholder="Enter track title" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Tell listeners about your track" rows={4} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="target-audience">Target Audience</Label>
              <Input id="target-audience" placeholder="Who is this track for?" />
            </div>

            <div className="space-y-2">
              <Label>Engagement Goals</Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="feedback" className="h-4 w-4 rounded border-border text-primary" />
                  <Label htmlFor="feedback" className="text-sm">
                    Feedback
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="streams" className="h-4 w-4 rounded border-border text-primary" />
                  <Label htmlFor="streams" className="text-sm">
                    Streams
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="comments" className="h-4 w-4 rounded border-border text-primary" />
                  <Label htmlFor="comments" className="text-sm">
                    Comments
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="shares" className="h-4 w-4 rounded border-border text-primary" />
                  <Label htmlFor="shares" className="text-sm">
                    Shares
                  </Label>
                </div>
              </div>
            </div>

            <Button className="w-full" onClick={handleContinue}>
              Proceed to Upload
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Card className="mt-4 border-none bg-transparent shadow-none">
          <CardContent className="space-y-4 p-0">
            <div className="space-y-2">
              <Label htmlFor="audio-file">Audio File</Label>
              <div className="flex h-32 w-full items-center justify-center rounded-md border border-dashed border-border bg-muted/30">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="rounded-full bg-primary/20 p-2">
                    <Upload className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">No File Chosen</p>
                </div>
              </div>
            </div>

            <Button className="w-full" onClick={handleContinue}>
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      )}
    </main>
  )
}

