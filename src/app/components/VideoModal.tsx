'use client'

import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { VideoModalProps } from "../types/common"

export default function VideoModal ({ URL }: VideoModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 w-full h-full">
          <video 
            src={URL}
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
           src={URL}
          className="w-full h-auto rounded-lg"
          autoPlay
          controls
          loop
        />
      </DialogContent>
    </Dialog>
  )
}