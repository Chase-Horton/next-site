'use client'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <div className="bg-muted/40 flex justify-center items-center min-h-screen min-w-screen">
      <div className="flex flex-col items-center">
          <div className="flex space-x-4 my-4 mx-4">
            <Button onClick={() => router.push('/dashboard')} className="">Dashboard</Button>
            <Button onClick={() => router.push('/dashboard/login')} className="">Login</Button>
          </div>
      </div>
    </div>
  )
}

