import Link from "next/link";

export const ContactCta = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Questions?</span>
          <span className="block">We&apos;re here to help.</span>
        </h2>
        <Link
          href="/contact"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
