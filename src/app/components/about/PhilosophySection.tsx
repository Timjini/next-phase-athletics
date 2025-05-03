import { BoltIcon, CalendarIcon, TrophyIcon, UsersIcon } from "@heroicons/react/24/solid"

export const PhilosophySection = () => {
    return (
        <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
                    Our <span className="text-yellow-500">Core</span> Philosophy
                  </h2>
        
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="flex items-center mb-4">
                        <TrophyIcon className="h-8 w-8 text-yellow-500 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Mission</h3>
                      </div>
                      <p className="text-gray-700">
                        To empower athletes of all levels with the tools, knowledge, and
                        mindset needed to break through performance barriers and achieve
                        sustained excellence in their sport.
                      </p>
                    </div>
        
                    <div className="bg-white p-8 rounded-xl shadow-md">
                      <div className="flex items-center mb-4">
                        <BoltIcon className="h-8 w-8 text-yellow-500 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Vision</h3>
                      </div>
                      <p className="text-gray-700">
                        To become the global benchmark for athletic development, where
                        cutting-edge sports science meets proven championship experience
                        to create the world&apos;s most effective training programs.
                      </p>
                    </div>
                  </div>
        
                  <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                      Our Methodology
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        {
                          icon: <UsersIcon className="h-6 w-6 text-yellow-500" />,
                          title: "Individualized",
                          text: "Custom programs for each athlete",
                        },
                        {
                          icon: <BoltIcon className="h-6 w-6 text-yellow-500" />,
                          title: "Science-Based",
                          text: "Proven techniques backed by research",
                        },
                        {
                          icon: <TrophyIcon className="h-6 w-6 text-yellow-500" />,
                          title: "Results-Driven",
                          text: "Measurable performance gains",
                        },
                        {
                          icon: <CalendarIcon className="h-6 w-6 text-yellow-500" />,
                          title: "Long-Term",
                          text: "Sustainable development focus",
                        },
                      ].map((item, index) => (
                        <div key={index} className="text-center p-4">
                          <div className="flex justify-center mb-3">{item.icon}</div>
                          <h4 className="font-bold text-lg text-gray-900 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
    )
}