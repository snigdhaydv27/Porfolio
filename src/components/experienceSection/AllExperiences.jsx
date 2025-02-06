import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "MERN Stack Developer",
    company: "Smart India Hackathon",
    date: "2024",
    responsibilities: [
      "Qualified Internal Round Held in College.",
      "Worked on Deepfake detection System-Kavach",
      "Lead role as a web developer among team.",
    ],
  },
  {
    job: "DSA",
    company: "Algorithm",
    date: "2024 - Present",
    responsibilities: [
      "Participated many coding contest.",
      "Solved 250+ questions over leetcode",
    ],
  },
  {
    job: "Java",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Create Airline management system.",
      "Skill used - Java, J-servlet, Html, Css.",
      "Booking And Cancelling of ticket features are available",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
