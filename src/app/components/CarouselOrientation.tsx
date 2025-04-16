import * as React from "react"

// import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


interface CarouselOrientationProps {
    data: string[]
  }

  export function CarouselOrientation({ data }: CarouselOrientationProps) {
    return (
      <div className="flex flex-col items-center w-full max-w-xl mx-auto space-y-4">
        <Carousel
          opts={{ align: "start" }}
          plugins={[Autoplay({ delay: 4000 })]}
          orientation="horizontal"
          className="w-full"
        >
          <CarouselContent className="-mt-1 min-h-[220px] md:min-h-[180px]">
            {data.map((paragraph, index) => (
              <CarouselItem key={index} className="pt-1">
                <div className="p-8 text-left">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-white">
                    {paragraph}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
  
          {/* Carousel controls below the content */}
          <div className="mt-6 flex justify-center gap-4">
            <CarouselPrevious className="relative static !translate-x-0 !translate-y-0" />
            <CarouselNext className="relative static !translate-x-0 !translate-y-0" />
          </div>
        </Carousel>
      </div>
    )
  }
  
