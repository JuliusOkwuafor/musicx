"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircularProgress } from "@/components/circular-progress"

export default function AnalyticsPage() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Analytics</h1>

      <Tabs defaultValue="dashboard" className="mt-4 w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="feedback">View Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Analytics Dashboard</h3>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center">
                  <CircularProgress value={24} size={80} strokeWidth={8} />
                  <p className="mt-2 text-sm font-medium">Skip Rate</p>
                </div>
                <div className="flex flex-col items-center">
                  <CircularProgress value={76} size={80} strokeWidth={8} />
                  <p className="mt-2 text-sm font-medium">Views Rate</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-medium">Song Performance Stats</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">When City Lights</span>
                    <span className="text-xs font-medium">76%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[76%] rounded-full bg-primary"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs">Gravity</span>
                    <span className="text-xs font-medium">45%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[45%] rounded-full bg-primary"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs">Summer Nights</span>
                    <span className="text-xs font-medium">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-full w-[92%] rounded-full bg-primary"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="feedback" className="mt-4 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/feedbackusericon.png" alt="@username" />
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
                  <AvatarImage src="/feedbackusericon.png" alt="@username" />
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
        </TabsContent>
      </Tabs>
    </main>
  )
}

