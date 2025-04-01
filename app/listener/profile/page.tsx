"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BellRing, CreditCard, LogOut } from "lucide-react"

export default function ListenerProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")
  const router = useRouter()

  return (
    <main className="flex flex-col p-4">
      <div className="relative">
        <div className="h-32 w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <div className="absolute -bottom-12 left-4">
          <div className="h-24 w-24 rounded-full border-4 border-background overflow-hidden">
            <img src="/profileimage.png" alt="@username" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-14 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">John Smith</h2>
          <p className="text-sm text-muted-foreground">@johnsmith</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => router.push("/listener/profile/edit")}>
          Edit Profile
        </Button>
      </div>

      <div className="mt-6 flex border-b border-border">
        <button
          className={`flex-1 border-b-2 pb-2 text-sm font-medium ${
            activeTab === "profile" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`flex-1 border-b-2 pb-2 text-sm font-medium ${
            activeTab === "earnings" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
          }`}
          onClick={() => setActiveTab("earnings")}
        >
          Earnings
        </button>
      </div>

      {activeTab === "profile" ? (
        <div className="mt-6 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <BellRing className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium">Notification</h3>
                  <p className="text-xs text-muted-foreground">Manage your notification preferences</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
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
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium">Payment Methods</h3>
                  <p className="text-xs text-muted-foreground">Manage your payment methods</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
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
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-destructive/20 flex items-center justify-center">
                  <LogOut className="h-5 w-5 text-destructive" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-medium">Logout</h3>
                  <p className="text-xs text-muted-foreground">Sign out of your account</p>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto">
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
                    className="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Earnings Overview</h3>
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Total Earnings</span>
                  <span className="font-medium">$45.50</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-muted">
                  <div className="h-full w-[45%] rounded-full bg-primary"></div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">This Month</p>
                  <p className="text-lg font-bold">$12.50</p>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <p className="text-xs text-muted-foreground">Last Month</p>
                  <p className="text-lg font-bold">$33.00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-medium">Recent Earnings</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <img src="/latestupload image.png" alt="Track cover" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">When City Lights</p>
                      <p className="text-xs text-muted-foreground">Marius Bliss</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-green-500">+$1.50</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-md overflow-hidden">
                      <img src="/latestupload image.png" alt="Track cover" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium">Gravity</p>
                      <p className="text-xs text-muted-foreground">Marius Bliss</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-green-500">+$1.50</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full" variant="outline">
            Withdraw Earnings
          </Button>
        </div>
      )}
    </main>
  )
}

