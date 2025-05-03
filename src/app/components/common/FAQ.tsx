'use client';
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export const FAQ = ({ items }: FAQProps) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="py-4 max-w-3xl mx-auto my-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        Frequently Asked Questions
      </h2>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {items.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              aria-expanded={activeFaq === index}
              aria-controls={`faq-${index}`}
            >
              <h3 className="text-lg font-medium text-gray-900">
                {faq.question}
              </h3>
              <FaChevronDown
                className={`h-5 w-5 text-blue-600 transition-transform duration-200 ${
                  activeFaq === index ? "transform rotate-180" : ""
                }`}
              />
            </button>
            <div
              id={`faq-${index}`}
              className={`px-6 pb-6 pt-0 ${
                activeFaq === index ? "block" : "hidden"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
