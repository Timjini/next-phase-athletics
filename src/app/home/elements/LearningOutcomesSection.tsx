import React from 'react';
import { 
  BoltIcon, 
  FireIcon, 
  ChartBarIcon, 
  QuestionMarkCircleIcon,
  UserGroupIcon,
  LightBulbIcon
} from '@heroicons/react/24/solid';

const LearningOutcomesSection: React.FC = () => {
  const benefits = [
    {
      icon: <BoltIcon className="h-8 w-8 text-yellow-500" />,
      title: "Elite Speed Techniques",
      description: "Master the same acceleration and maximum velocity mechanics Dwain used to break 10 seconds"
    },
    {
      icon: <FireIcon className="h-8 w-8 text-yellow-500" />,
      title: "Explosive Strength Building",
      description: "Olympic lifting techniques and plyometrics tailored for sprinters"
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-yellow-500" />,
      title: "Champion Mindset Training",
      description: "Mental frameworks for competition focus and overcoming performance anxiety"
    },
    {
      icon: <ChartBarIcon className="h-8 w-8 text-yellow-500" />,
      title: "Elite Guidance",
      description: "Personalized Guidance to help athletes achieve their ultimate GOAL."
    },
    {
      icon: <QuestionMarkCircleIcon className="h-8 w-8 text-yellow-500" />,
      title: "Exclusive Q&A Sessions",
      description: "Ask Dwain anything about racing Bolt, Olympic preparation, and career longevity"
    },
    {
      icon: <UserGroupIcon className="h-8 w-8 text-yellow-500" />,
      title: "Community Access",
      description: "Private network with fellow athletes for ongoing support"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What You&apos;ll <span className="text-yellow-500">Learn & Gain</span>
          </h4>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The complete toolkit for sprinting success, distilled from Dwain&apos;s 20+ years at the highest level
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-400"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bonus Callout */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-xl p-8 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            <span className="text-yellow-500">Bonus:</span> All participants receive
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm font-medium">Custom Training Plan</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm font-medium">Professional Training</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm font-medium">Elite Guidance</span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm font-medium">XLR8 Care Kit</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomesSection;