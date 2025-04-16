import Image from "next/image";
import { DwainChambersForm } from "../forms/DwainChambersForm";

export default function Page() {
  return (
    <>
    <section className="">
      <div className="relative gap-8 items-center  px-8 mx-auto max-w-screen-sm xl:gap-16 md:grid md:grid-cols-1 sm:py-8 lg:px-6 bg-white rounded-lg">
          <Image src="/images/xlr8.png"  alt="XLR8 camp" width={600} height={600} />
          <DwainChambersForm />
      </div>
    </section>
    </>
  );
}
