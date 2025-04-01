"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { X } from "lucide-react"

export default function NotificationSettingsPage() {
  const router = useRouter()

  return (
    <main className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Notification Settings</h1>
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <X className="h-6 w-6" />
        </Button>
      </div>

      <div className="mt-6 space-y-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-medium">Push Notifications</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Feedback</p>
                  <p className="text-xs text-muted-foreground">Get notified when someone leaves feedback</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Likes</p>
                  <p className="text-xs text-muted-foreground">Get notified when someone likes your track</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">New Followers</p>
                  <p className="text-xs text-muted-foreground">Get notified when someone follows you</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">System Updates</p>
                  <p className="text-xs text-muted-foreground">Get notified about app updates</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-medium">Email Notifications</h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Feedback</p>
                  <p className="text-xs text-muted-foreground">Get notified when someone leaves feedback</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Weekly Digest</p>
                  <p className="text-xs text-muted-foreground">Get a weekly summary of your activity</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Promotions</p>
                  <p className="text-xs text-muted-foreground">Get notified about promotions and offers</p>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        <Button className="w-full" onClick={() => router.back()}>
          Save Changes
        </Button>
      </div>
    </main>
  )
}

