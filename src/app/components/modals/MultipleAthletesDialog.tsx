import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface MultipleAthletesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MultipleAthletesDialog = ({
  open,
  onOpenChange,
}: MultipleAthletesDialogProps) => {
  const [step, setStep] = useState<"select" | "form">("select");
  const [athleteCount, setAthleteCount] = useState(1);
  const [currentForm, setCurrentForm] = useState(0);

  const startForms = () => {
    if (athleteCount > 0) {
      setCurrentForm(0);
      setStep("form");
    }
  };

  const goBackToSelect = () => {
    setStep("select");
    setAthleteCount(1);
    setCurrentForm(0);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-gray-50 min-h-screen min-w-screen">
        {step === "select" ? (
          <>
            <DialogHeader>
              <DialogTitle>Select Number of Athletes</DialogTitle>
              <DialogDescription>
                How many athletes do you want to add?
              </DialogDescription>
            </DialogHeader>
            <Input
              type="number"
              min={1}
              value={athleteCount}
              onChange={(e) => setAthleteCount(Number(e.target.value))}
              className="mt-4"
            />
            <Button onClick={startForms} className="mt-4 w-full">
              Continue
            </Button>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Athlete {currentForm + 1}</DialogTitle>
              <DialogDescription>
                Fill out the information for athlete {currentForm + 1} of{" "}
                {athleteCount}.
              </DialogDescription>
            </DialogHeader>

            {/* Replace this div with your real form fields */}
            <div className="border p-4 rounded bg-white text-center">
              Form Content for Athlete {currentForm + 1}
            </div>

            <div className="flex justify-between mt-4">
              <Button
                variant="secondary"
                onClick={
                  currentForm === 0 ? goBackToSelect : () => setCurrentForm((c) => c - 1)
                }
              >
                {currentForm === 0 ? "Back" : "Previous"}
              </Button>
              <Button
                onClick={() => setCurrentForm((c) => c + 1)}
                disabled={currentForm === athleteCount - 1}
              >
                {currentForm === athleteCount - 2 ? "Next" : "Next"}
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};