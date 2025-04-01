import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CircularProgress } from "@/components/circular-progress"

export default function DashboardPage() {
  return (
    <main className="flex flex-col p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10 border">
            <AvatarImage src="/profileimage.png" alt="@username" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-sm font-medium">Marius Bliss</h2>
            <p className="text-xs text-muted-foreground">Artist</p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <CircularProgress value={24} size={80} strokeWidth={8} />
              <p className="mt-2 text-sm font-medium">Skip Rate</p>
              <p className="text-xs text-muted-foreground">24%</p>
            </div>
          </CardContent>
        </Card>
        <Card className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col items-center">
              <CircularProgress value={76} size={80} strokeWidth={8} />
              <p className="mt-2 text-sm font-medium">Views Rate</p>
              <p className="text-xs text-muted-foreground">76%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Total Stats</h3>
          <p className="text-sm text-muted-foreground">Last 30 days</p>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm">Listeners</p>
          <p className="text-sm font-medium">10,340</p>
        </div>
        <Progress value={65} className="mt-1 h-2" />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-sm">Plays</p>
          <p className="text-sm font-medium">120</p>
        </div>
        <Progress value={30} className="mt-1 h-2" />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Last Upload</h3>
          <p className="text-xs text-muted-foreground">View all</p>
        </div>
        <Card className="mt-2 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center p-3">
              <Avatar className="h-10 w-10 rounded-md">
                <AvatarImage src="/latestupload image.png" alt="Track cover" />
                <AvatarFallback className="rounded-md">MB</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">Gravity (New World Order)</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
              <button className="ml-auto">
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
                  className="lucide lucide-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Latest Feedback</h3>
          <p className="text-xs text-muted-foreground">View all</p>
        </div>
        <Card className="mt-2 overflow-hidden">
          <CardContent className="p-3">
            <div className="flex items-start">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/feedbackusericon.png" alt="@username" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <div className="flex items-center">
                  <p className="text-sm font-medium">James David</p>
                  <p className="ml-2 text-xs text-muted-foreground">• Verified Listener</p>
                </div>
                <p className="mt-1 text-xs">Your beat has the perfect vibe!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

