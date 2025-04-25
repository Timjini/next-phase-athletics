import React from 'react';
import Image from 'next/image';
import {
  EnvelopeIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';
import Link from "next/link";

const TeamSupportSection: React.FC = () => {
  const faqs = [
    {
      question: "Will I be able to aks the Coach questions related to my sport?",
      answer: 'Yes, you can ask questions while training and during Q&A sessions.',
    },
    {
      question: 'How intense will the training be?',
      answer:
        'The goal is to push you to your limits. Expect high-intensity sessions with a focus on sprinting techniques, and explosive strength.',
    },
    {
      question: 'Can parents observe sessions?',
      answer:
        'Yes, parents are welcome to observe training sessions.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🙌 Meet the <span className="text-yellow-500">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate professionals behind your transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Organizers Column */}
          <div className="space-y-12">
            {/* NextPhase Bio */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/images/nextPhase-logo-white2.png"
                  alt="NextPhase"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="text-2xl font-bold text-gray-900">NextPhase</h3>
              </div>
              <p className="text-gray-700">
              NextPhase transforms athletes through world-class training camps in speed, agility, and strength—led by elite competitors turned mentors. 
              Whether you&apos;re a track sprinter, football player, or soccer star, our programs sharpen skills, build explosive power, and forge mental toughness. 
              We don’t just train bodies; we develop champions’ mindsets. This is where your next level begins.
              </p>
            </div>

            {/* Dwain Chambers Bio */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/team/coach-Dwain-Chambers.jpg"
                  alt="Dwain Chambers"
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dwain Chambers</h3>
                  <p className="text-yellow-600 font-medium">Head Performance Coach</p>
                </div>
              </div>
              <p className="text-gray-700">
                20+ years elite experience. European Record Holder. Trained under world&apos;s
                top sprint coaches. Specializes in acceleration mechanics.
              </p>
            </div>
          </div>

          {/* Support Column */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Email</h4>
                    <a
                      href="mailto:info@nxtphs.com"
                      className="text-gray-700 hover:text-yellow-600"
                    >
                      info@nxtphs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <PhoneIcon className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900">Phone</h4>
                    <a
                      href="tel:+18155568037"
                      className="text-gray-700 hover:text-yellow-600"
                    >
                      (815) 556-8037
                    </a>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <p className="text-gray-700 hidden">
                    <strong>Office Hours:</strong>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Responses within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <h3 className="text-2xl font-bold text-gray-900">FAQs</h3>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-bold text-gray-900">{faq.question}</h4>
                    <p className="text-gray-700 mt-1">{faq.answer}</p>
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-gray-200">
                  <Link
                    href="/contact"
                    className="text-yellow-600 hover:text-yellow-700 font-medium"
                  >
                    Contact us with any questions →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSupportSection;
