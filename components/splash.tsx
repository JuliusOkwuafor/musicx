"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

export function Splash() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is authenticated
    const timer = setTimeout(() => {
      router.push("/role-selection")
    }, 2000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center space-y-4 bg-black p-4">
      <div className="relative h-64 w-full max-w-md">
        <Image src="/songpayindex.jpg" alt="SongPay Logo" fill className="object-contain" priority />
      </div>
      <p className="text-sm text-muted-foreground">Make Your Music Better</p>
    </div>
  )
}

