"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CampDetailsModalProps {
  description: string;
}

export default function CampDetailsModal({
  description,
}: CampDetailsModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="actionBtn w-10 rounded-full h-10 mx-auto flex items-center justify-center sm:w-48 sm:h-auto sm:rounded-lg sm:p-0 sm:bg-blue-600 sm:text-white sm:text-lg sm:font-bold hover:opacity-96"
        >
          <span className=" hidden sm:block">
            Camp Details
          </span>
          <span className="font-bold text-gray-500 capitalize sm:hidden">?</span>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl bg-gradient-to-t from-[#09131D] to-[#00215f] text-gray-50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Camp Program Details
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[600px] pr-2">
          <div
            className="text-sm text-gray-50"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
