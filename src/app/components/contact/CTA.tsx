const ctaData = {
    heading: "Still have questions?",
    description: "Our customer support team is available to help you with any questions or concerns you may have.",
    buttons: [
      {
        label: "Call Us Now",
        link: "tel:+18155568037",
        className: "bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-150 ease-in-out"
      },
      {
        label: "Email Support",
        link: "mailto:info@nxtphs.com",
        className: "bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-150 ease-in-out"
      }
    ]
  };
  
  export const CTA = () => {
    return (
      <div className="bg-gradient-to-t from-black to-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-4">{ctaData.heading}</h2>
          <p className="text-xl mb-8">{ctaData.description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaData.buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={button.className}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  