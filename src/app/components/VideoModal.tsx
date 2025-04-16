'use client'

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function VideoModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 w-full h-full">
          <video 
            src="https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/warmup.MP4" 
            className="w-full h-auto max-h-[800px] rounded-lg object-cover" 
            autoPlay 
            muted
            loop
            playsInline
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0">
        <video
          src="https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/warmup.MP4"
          className="w-full h-auto rounded-lg"
          autoPlay
          controls
          loop
        />
      </DialogContent>
    </Dialog>
  )
}