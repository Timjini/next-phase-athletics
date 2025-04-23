import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create a host
  const host = await prisma.host.create({
    data: {
      name: "Dwain Chambers",
      bio: "Dwain Chambers, a British track sprinter, is the sixth fastest man over 60 metres and one of the few sprinters to run a sub-10second 100meters. Currently, he is the fastest 45-year-old in the world.",
      imageUrl: "https://www.chambersforsport.com/images/dwain-chambers-page.jpg",
    },
  });

  // Address of the camp
  // Lake forest academy
  // Lake Forest Academy, 1500 Kennedy Rd, Lake Forest, IL 60045, United States
  // Create a camp program
  const campProgram = await prisma.campProgram.create({
    data: {
      title: "NextPhase Presents XLR8 With Dwain Chambers",
      description: "<div class='py-12 px-4 md:px-4 lg:px-4'><div class='max-w-4xl mx-auto'><h1 class='text-4xl font-extrabold text-gray-900 mb-4'>XLR8 with Dwain Chambers – A 4-Day Speed Explosion Camp</h1><p class='text-lg text-gray-700 mb-4'>Step into greatness with a once-in-a-lifetime opportunity to train under one of the fastest humans to ever walk the earth — Dwain Chambers.</p><p class='text-lg text-gray-700 mb-4'>The XLR8 Camp is a 4-day intensive training experience designed to transform young athletes from the ground up. Each session is 3 hours long — with options for either a morning (8 AM – 11 AM) or afternoon (2 PM – 5 PM) camp — giving every athlete focused, high-quality instruction.</p><p class='text-lg text-gray-700 mb-4'>Dwain Chambers will personally guide campers through the fundamentals of correct running form, mechanics, and explosive power development. Athletes will not only learn how to run, but why running correctly can unlock their full potential across all sports — from football, basketball, and lacrosse to track & field and soccer.</p><p class='text-lg text-gray-700 mb-4'>This camp isn’t just drills and reps. It’s a masterclass in speed, mindset, and mechanics, delivered by a world-class athlete who has competed at the highest levels.</p><div class='text-xl font-semibold text-yellow-600 mb-4'>⚡ Correct your stride. Sharpen your start. Explode past your limits.</div><p class='text-lg text-gray-800 font-semibold mb-6'>There’s fast — and then there’s XLR8 fast.</p><p class='text-lg text-red-600 font-bold'>Spots are limited. Don’t miss your chance to be coached by greatness.</p></div></div>",
      imageUrl:"/images/xlr8.png",
      slug:"xlr8",
      videoUrl:"https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/warmup.MP4",
      location: "Lake Forest Academy, 1500 Kennedy Rd, Lake Forest, IL 60045, United States",
      lat: 42.240620,
      lng: -87.884734
    },
  });

  // Link host to the camp program
  await prisma.campProgramHost.create({
    data: {
      campProgramId: campProgram.id,
      hostId: host.id,
    },
  });

  // 8am - 11am
  // 2pm - 5pm
  // Define sessions
  // const sessions = [
  //   { label: "Camp 1", dates: ["2025-06-30", "2025-07-03"], period: "MORNING" }, 
  //   { label: "Camp 2", dates: ["2025-06-30", "2025-07-03"], period: "AFTERNOON" },
  //   { label: "Camp 3", dates: ["2025-07-07", "2025-07-10"], period: "MORNING" },
  //   { label: "Camp 4", dates: ["2025-07-07", "2025-07-10"], period: "AFTERNOON" },
  // ];

  // // Create sessions
  // for (const session of sessions) {
  //   await prisma.campSession.create({
  //     data: {
  //       label: session.label,
  //       startDate: new Date(session.dates[0]),
  //       endDate: new Date(session.dates[1]),
  //       period: session.period as never,
  //       availableSlots: 100,
  //       price: 650,
  //       status: "ACTIVE",
  //       campProgramId: campProgram.id,
  //     },
  //   });
  // }

  const postsContent = [
    { description: "The countdown is on.Train with the best this summer.Speed. Agility. Strength. Mindset.", tags: "🚀 #NextPhaseAthletics #TrainWithTheBest #SummerGrind #LevelUp", url: "/", imageUrl:"post1.jpg" },
    { description: "Athlete Feature Real athletes. Real results. From pro mentorship to elite training — we’re giving the next generation every tool to win.", tags: "#NextPhaseMode #SpeedKills #AthleteLife", url: "/", imageUrl:"post2.jpg" },
    { description: "Real athletes. Real results. 💪 From pro mentorship to elite training — we’re giving the next generation every tool to win. 🏆", tags: "#AthleteFeature #RealResults #ProMentorship #EliteTraining #NextGenAthletes", url: "/", imageUrl:"post3.jpg" },
  ];

    // Create posts
    for (const postContent of postsContent) {
      await prisma.post.create({
        data: {
          description: postContent.description,
          tags: postContent.tags,
          url: postContent.url,
          imageUrl: postContent.imageUrl
        },
      });
    }
  

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());