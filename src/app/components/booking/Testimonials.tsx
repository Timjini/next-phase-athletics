export const Testimonials = () => {
    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">What Athletes Say</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "100m Sprinter",
                content: "Dwain's camp transformed my starts. I dropped 0.3s off my 100m time after just one weekend!"
              },
              {
                name: "Michael Chen",
                role: "Football Player",
                content: "The speed techniques I learned helped me get scouted for a semi-pro team. Worth every penny."
              },
              {
                name: "Emma Williams",
                role: "Fitness Enthusiast",
                content: "Even as a non-competitive athlete, I gained so much from Dwain's training methods and mindset coaching."
              }
            ].map((testimonial, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">{testimonial.name}</h3>
                    <p className="mt-1 text-base text-gray-500 text-center">{testimonial.role}</p>
                    <p className="mt-3 text-base text-gray-600">
                      &quot;{testimonial.content}&quot;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}