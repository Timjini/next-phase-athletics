import { InstagramPost } from "../types/common";

// Camp dates
export const campOptions = [
  "Camp 1: June 9 - June 12 (Morning)",
  "Camp 2: June 9 - June 12 (Afternoon)",
  "Camp 3: June 16 - June 19 (Morning)",
  "Camp 4: June 16 - June 19 (Afternoon)",
  "Camp 5: June 23 - June 26 (Morning)",
  "Camp 6: June 24 - June 26 (Afternoon)",
  "Camp 7: June 30 - July 3 (Afternoon)",
];

// Social media posts
export const posts: InstagramPost[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "Team training session at the new facility! #Athletics #Nextphase",
    likes: 1243,
    comments: 89,
    timestamp: "2 hours ago",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption: "Game day prep! Getting ready for the championship finals.",
    likes: 2456,
    comments: 134,
    timestamp: "1 day ago",
    isVideo: true,
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    caption:
      "New uniforms unveiled for the upcoming season! What do you think?",
    likes: 3210,
    comments: 287,
    timestamp: "3 days ago",
  },
];

export const icons = [
  {
    image: "/images/basketball-illustration.png",
    title: "basketball",
  },
  {
    image: "/images/confidence-illustration.png",
    title: "confidence",
  },
  {
    image: "/images/track-illustration.png",
    title: "track",
  },
  {
    image: "/images/us-football.png",
    title: "football",
  },
  {
    image: "/images/soccer-illustration.png",
    title: "soccer",
  },
  {
    image: "/images/Lacrosse-illustration.png",
    title: "lacrosse",
  },
  {
    image: "/images/hockey-illustration.png",
    title: "hockey",
  },
];

export const paragraphs = [
  "Every summer, we host immersive speed, agility, and strength camps led by world-class athletes — individuals who have competed at the highest levels and now dedicate their expertise to developing young talent. From middle school to college athletes, our programs are designed to push boundaries, sharpen skills, and elevate mindset.",
  "Whether you're a track athlete chasing speed, a football player craving explosiveness, or a soccer player seeking control and agility, NextPhase delivers the tools, mentorship, and intensity to get you there. Athletes from all sports — basketball, hockey, baseball, lacrosse, cross country and beyond — find their competitive edge in our training systems.",
  "But our mission is bigger than just physical performance. We believe that mental strength, confidence, and consistency are just as vital as the reps you grind through. That’s why we bring a champion’s mindset into every drill, every session, every day.",
  "At NextPhase, you’re not just working out — you’re leveling up. This is where your next chapter begins. This is where champions start.",
];



export const ContactFaqs = [
  {
    question: "How soon can I expect a response?",
    answer:
      "We typically respond to all inquiries within 24-48 hours during business days (Monday to Friday).",
  }
  // {
  //   question: "What's the best way to reach customer support?",
  //   answer:
  //     "For urgent matters, please call our support line at +1 (555) 123-4567. For non-urgent inquiries, the contact form is the most efficient method.",
  // },
  // {
  //   question: "Do you have a physical location I can visit?",
  //   answer:
  //     "Yes! Our headquarters are located at 123 Business Avenue, San Francisco, CA 94107. We're open Monday-Friday from 9AM to 5PM.",
  // },
  // {
  //   question: "Can I change or cancel my order after submission?",
  //   answer:
  //     "Order changes or cancellations must be requested within 1 hour of placement. Please contact us immediately with your order number.",
  // }
];

export const BookingFAQ  = [
  {
    question: "What should I bring?",
    answer: "Please bring athletic clothing, running shoes, a water bottle, and any personal items you may need. We'll provide all training equipment."
  },
  {
    question: "Is this suitable for beginners?",
    answer: "Yes! The camp is designed for all fitness levels. Dwain and his team will tailor exercises to each participant's ability."
  },
  {
    question: "Can parents watch?",
    answer: "Absolutely. We have a designated viewing area for parents and spectators."
  },
  {
    question: "What's the cancellation policy?",
    answer: "You can cancel up to 14 days before the camp for a full refund. After that, cancellations receive a 50% refund."
  }
];

export const schoolYears = [
  'Grade 5',
  'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
  'Grade 11', 'Grade 12','College', 'Professional'
];

export const popularSports = [
  'Cross country', 'Football', 'Basketball', 'Tennis', 'Soccer', 'Swimming', 'Track and field',
  'Rugby','Hockey', 'Netball', 'Volleyball',
  'Gymnastics', 'Badminton', 'Table Tennis', 'Cycling', 'Other'
];