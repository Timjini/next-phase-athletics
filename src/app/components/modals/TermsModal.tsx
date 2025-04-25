"use client";

import { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function TermsModal() {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm underline text-yellow-400 hover:text-yellow-500 cursor-pointer">
          terms and conditions
        </button>
      </DialogTrigger>
      <DialogContent
        className="max-w-2xl bg-gradient-to-t from-[#09131D] to-[#00215f] text-gray-50"
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            NextPhase – Terms and Conditions
          </DialogTitle>
        </DialogHeader>

        <ScrollArea className="h-[400px] pr-2 ">
          <div className="space-y-4 text-sm text-gray-50">
            <p>
              By registering for any NextPhase Camp, including{" "}
              <strong>“XLR8 with Dwain Chambers”</strong>, you agree to the
              following terms and conditions:
            </p>

            <div>
              <h3 className="font-semibold">1. Registration and Payment</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  Full payment is required at the time of registration to secure
                  a spot in the selected camp session.
                </li>
                <li>
                  All processing fees incurred during payment (via credit card
                  or other methods) are the responsibility of the
                  registrant/cardholder.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">2. Cancellations and Refunds</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  Cancellations made more than 7 days prior to the camp start
                  date may be eligible for a partial refund (excluding
                  processing fees).
                </li>
                <li>
                  No refunds will be issued for cancellations made within 7 days
                  of the camp start date.
                </li>
                <li>
                  Absences or missed days for any reason will not be refunded or
                  credited toward future camps.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">3. Health and Insurance</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  All campers must have active health insurance coverage for the
                  duration of the camp.
                </li>
                <li>
                  Parents/guardians are responsible for ensuring their child is
                  in good physical condition to participate in high-intensity
                  athletic activity.
                </li>
                <li>
                  NextPhase and its staff are not responsible for injuries or
                  medical expenses that may occur during camp.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">4. Camp Conduct and Behavior</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  All participants are expected to maintain respectful and
                  sportsmanlike behavior.
                </li>
                <li>
                  NextPhase reserves the right to dismiss any camper for
                  disruptive or unsafe conduct without a refund.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">
                5. Camp Changes and Cancellations by NextPhase
              </h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  In the rare event that a camp session is canceled by NextPhase
                  (e.g., due to weather, facility issues, or staffing),
                  registrants will be given the option to transfer to another
                  session or receive a full refund.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">6. Media Release</h3>
              <ul className="list-disc ml-6 mt-1 space-y-1">
                <li>
                  By participating, you grant permission for photos or videos of
                  your athlete to be used for promotional purposes by NextPhase
                  unless otherwise stated in writing.
                </li>
              </ul>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
