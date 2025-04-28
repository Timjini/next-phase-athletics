import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    type: "Address",
    icon: <FaMapMarkerAlt className="h-5 w-5 text-yellow-400" />,
    details: [
      "3500 Martens Street",
      "Franklin Park, IL 60131-2016",
      "United States"
    ]
  },
  {
    type: "Phone",
    icon: <FaPhone className="h-5 w-5 text-yellow-400" />,
    details: [
      "(815) 556-8037",
      // "Monday-Friday, 9am-5pm PST"
    ]
  },
  {
    type: "Email",
    icon: <FaEnvelope className="h-5 w-5 text-yellow-400" />,
    details: [
      "info@nxtphs.com",
    ]
  }
];

const socialLinks = [
  {
    name: "Twitter",
    icon: <FaTwitter className="h-8 w-8" />,
    link: "https://twitter.com/yourcompany",
    color: "text-gray-400",
    hoverColor: "hover:text-blue-600"
  },
  {
    name: "Instagram",
    icon: <FaInstagram className="h-8 w-8" />,
    link: "https://instagram.com/yourcompany",
    color: "text-gray-500",
    hoverColor: "hover:text-pink-700"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="h-8 w-8" />,
    link: "https://linkedin.com/company/yourcompany",
    color: "text-gray-700",
    hoverColor: "hover:text-blue-900"
  }
];

export const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Information</h2>
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{item.type}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Links */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h2>
        <div className="flex space-x-4">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${link.color} ${link.hoverColor} transition duration-150 ease-in-out`}
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
