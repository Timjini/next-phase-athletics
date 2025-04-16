"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { DwainChambersForm } from "../forms/DwainChambersForm"
import Loader from "../components/Loader"

export default function Page() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])


  if (!isReady) {
    return (
      <Loader />
    )
  }

  return (
    <section>
      <div className="relative gap-8 items-center px-8 mx-auto max-w-screen-sm xl:gap-16 md:grid md:grid-cols-1 sm:py-8 lg:px-6 bg-white rounded-lg">
        <Image src="/images/xlr8.png" alt="XLR8 camp" width={600} height={600} />
        <DwainChambersForm />
      </div>
    </section>
  )
}
