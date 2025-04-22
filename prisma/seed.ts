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

  // Create a camp program
  const campProgram = await prisma.campProgram.create({
    data: {
      title: "XLR8",
      description: "Every summer, we host immersive speed, agility, and strength camps led by world-class athletes — individuals who have competed at the highest levels and now dedicate their expertise to developing young talent. From middle school to college athletes, our programs are designed to push boundaries, sharpen skills, and elevate mindset.",
      imageUrl:"/images/xlr8.png",
      slug:"xlr8",
      videoUrl:"https://pub-bc4cae30cb704275a2d82ae56b32c9b6.r2.dev/cfs/warmup.MP4",
      location: "3500 Martens Street Franklin Park, IL 60131-2016",
      lat: 41.942204,
      lng: -87.861084
    },
  });

  // Link host to the camp program
  await prisma.campProgramHost.create({
    data: {
      campProgramId: campProgram.id,
      hostId: host.id,
    },
  });

  // Define sessions
  const sessions = [
    { label: "Camp 1", dates: ["2025-06-09", "2025-06-12"], period: "MORNING" },
    { label: "Camp 2", dates: ["2025-06-09", "2025-06-12"], period: "AFTERNOON" },
    { label: "Camp 3", dates: ["2025-06-16", "2025-06-19"], period: "MORNING" },
    { label: "Camp 4", dates: ["2025-06-16", "2025-06-19"], period: "AFTERNOON" },
    { label: "Camp 5", dates: ["2025-06-23", "2025-06-26"], period: "MORNING" },
    { label: "Camp 6", dates: ["2025-06-24", "2025-06-26"], period: "AFTERNOON" },
    { label: "Camp 7", dates: ["2025-06-30", "2025-07-03"], period: "AFTERNOON" },
  ];

  // Create sessions
  for (const session of sessions) {
    await prisma.campSession.create({
      data: {
        label: session.label,
        startDate: new Date(session.dates[0]),
        endDate: new Date(session.dates[1]),
        period: session.period as never,
        availableSlots: 80,
        price: 650,
        status: "ACTIVE",
        campProgramId: campProgram.id,
      },
    });
  }

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