import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Project Lead",
    company: "Smart India Hackathon 2025",
    date: "Finalist",
    responsibilities: [
      "Led Team BUDDHI's complete frontend and backend development.",
      "Built an ERP-based Integrated Student Management System.",
      "Integrated Razorpay payments and deployed the solution on AWS.",
    ],
  },
  {
    job: "Web Developer",
    company: "Web & Coding Club, NIT Patna",
    date: "Dec 2023 - Aug 2024",
    responsibilities: [
      "Built web experiences with Next.js, React.js, and Supabase.",
      "Collaborated with student teams on maintainable web solutions.",
      "Worked with AWS and modern development workflows.",
    ],
  },
  {
    job: "Competitive Programmer",
    company: "LeetCode & Codeforces",
    date: "2023 - Present",
    responsibilities: [
      "Solved 850+ LeetCode, 300+ Codeforces, and 150+ GFG problems.",
      "LeetCode max rating: 1936; Codeforces max rating: 1370.",
      "Ranked 907 in LeetCode Weekly Contest 512 and Top 1% in NPTEL HCI.",
    ],
  },
  {
    job: "AI Product Architect",
    company: "Amazon HackOn Season 5",
    date: "Semifinalist - 2026",
    responsibilities: [
      "Architected ReLoop, an AI-powered hyperlocal reverse-logistics platform.",
      "Used AWS Bedrock, machine learning, and geospatial smart routing.",
      "Added a RAG chatbot and Green Credit System for sustainable disposal.",
    ],
  },
  {
    job: "AI/ML Developer",
    company: "ByteVerse 7.0",
    date: "Finalist - 2025",
    responsibilities: [
      "Created DeFace, a deepfake detector for real and manipulated media.",
      "Used Google's Vision Transformer API and transfer learning.",
      "Combined adversarial ML with the ViT pipeline to improve precision by 5%.",
    ],
  },
  {
    job: "Hackathon Achievements",
    company: "Amazon ML, Flipkart & Adobe",
    date: "2025 - 2026",
    responsibilities: [
      "Top 200 in the Amazon ML Challenge among 89,392 participants.",
      "Semifinalist at Flipkart GRIDLOCK 2.0 with a traffic-demand ML model.",
      "Semifinalist at the Adobe India Hackathon 2025.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
      {experiences.map((experience) => (
        <SingleExperience key={`${experience.job}-${experience.company}`} experience={experience} />
      ))}
    </div>
  );
};

export default AllExperiences;
