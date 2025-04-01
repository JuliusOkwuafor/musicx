"use client"

import { useRouter } from "next/navigation"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export default function FeedbackDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()

  return (
    <main className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Song Details</h1>
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-4 flex items-center">
        <Avatar className="h-12 w-12 rounded-md">
          <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Track cover" />
          <AvatarFallback className="rounded-md">MB</AvatarFallback>
        </Avatar>
        <div className="ml-3">
          <h2 className="text-lg font-semibold">When City Lights</h2>
          <p className="text-sm text-muted-foreground">Marius Bliss • 3 days ago</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium">Feedback</h3>
        <div className="mt-2 space-y-4">
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
                  <div className="mt-2 flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span className="ml-1 text-xs">Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <span className="ml-1 text-xs">Reply</span>
                    </Button>
                  </div>
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
                  <div className="mt-2 flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                      <span className="ml-1 text-xs">Like</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle"
                      >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                      </svg>
                      <span className="ml-1 text-xs">Reply</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

