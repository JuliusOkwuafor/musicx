"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BellRing, CreditCard, LogOut } from "lucide-react"

export default function ProfilePage() {
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
          <h2 className="text-xl font-bold">Marius Bliss</h2>
          <p className="text-sm text-muted-foreground">@mariusbliss</p>
        </div>
        <Button variant="outline" size="sm" onClick={() => router.push("/profile/edit")}>
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
            activeTab === "settings" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
          }`}
          onClick={() => setActiveTab("settings")}
        >
          Settings
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
                  <h3 className="text-sm font-medium">Transaction History</h3>
                  <p className="text-xs text-muted-foreground">View your payment history</p>
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
              <h3 className="text-sm font-medium">Notification Settings</h3>
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Feedback</span>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary">
                    <span className="inline-block h-5 w-5 translate-x-[2px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[22px]" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Email</span>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50">
                    <span className="inline-block h-5 w-5 translate-x-[22px] rounded-full bg-background shadow-lg ring-0 transition-transform" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">SMS</span>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary">
                    <span className="inline-block h-5 w-5 translate-x-[2px] rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[22px]" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium">Password</h3>
              <div className="mt-4 space-y-3">
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Current Password</label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    value="••••••••••"
                    readOnly
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs text-muted-foreground">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="Confirm new password"
                  />
                </div>
                <Button className="w-full">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </main>
  )
}

