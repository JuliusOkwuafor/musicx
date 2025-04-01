"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <main className="flex flex-col p-4">
      <h1 className="text-2xl font-bold">Notifications</h1>

      <Tabs defaultValue="all" className="mt-4 w-full" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
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
                    <p className="ml-2 text-xs text-muted-foreground">• 2h ago</p>
                  </div>
                  <p className="mt-1 text-xs">Left feedback on your track "When City Lights"</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell text-primary"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">System</p>
                    <p className="ml-2 text-xs text-muted-foreground">• 1d ago</p>
                  </div>
                  <p className="mt-1 text-xs">Your song "Gravity" has been uploaded successfully</p>
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
                    <p className="ml-2 text-xs text-muted-foreground">• 3d ago</p>
                  </div>
                  <p className="mt-1 text-xs">Left feedback on your track "Summer Nights"</p>
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
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">James David</p>
                    <p className="ml-2 text-xs text-muted-foreground">• 2h ago</p>
                  </div>
                  <p className="mt-1 text-xs">Left feedback on your track "When City Lights"</p>
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
                    <p className="ml-2 text-xs text-muted-foreground">• 3d ago</p>
                  </div>
                  <p className="mt-1 text-xs">Left feedback on your track "Summer Nights"</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="mt-4 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bell text-primary"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">System</p>
                    <p className="ml-2 text-xs text-muted-foreground">• 1d ago</p>
                  </div>
                  <p className="mt-1 text-xs">Your song "Gravity" has been uploaded successfully</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-credit-card text-primary"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2" />
                    <line x1="2" x2="22" y1="10" y2="10" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    <p className="text-sm font-medium">System</p>
                    <p className="ml-2 text-xs text-muted-foreground">• 5d ago</p>
                  </div>
                  <p className="mt-1 text-xs">Payment of $5.50 was successful</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  )
}

