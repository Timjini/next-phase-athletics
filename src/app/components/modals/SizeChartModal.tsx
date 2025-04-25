import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SizeChartModal({ isOpen, onClose }: SizeChartModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} >
      <DialogContent  className="bg-gradient-to-b from-[#0046CC] to-[#09131D]">
        <DialogHeader>
          <DialogTitle className="text-gray-600">T-Shirt Size Chart</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          {/* Replace with your actual size chart image */}
          <Image
            src={`/images/t-shirt-sizechart.png`}
            alt="T-Shirt Size Chart"
            width={600}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}