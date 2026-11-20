import SingleSkill from "./SingleSkill";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiMysql,
  SiNextdotjs,
  SiPytorch,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiJava, DiMongodb, DiPython } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";


const skills = [
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Tailwind",
    icon: RiTailwindCssFill,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "NodeJs",
    icon: FaNodeJs,
  },
  {
    skill: "ExpressJs",
    icon: SiExpress,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
  {
    skill: "C++",
    icon: SiCplusplus,
  },
  {
    skill: "Python",
    icon: DiPython,
  },
  {
    skill: "Java",
    icon: DiJava,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "PyTorch",
    icon: SiPytorch,
  },
  {
    skill: "MySQL",
    icon: SiMysql,
  },
  {
    skill: "Supabase",
    icon: SiSupabase,
  },
  {
    skill: "AWS",
    icon: SiAmazonwebservices,
  },
  {
    skill: "Docker",
    icon: SiDocker,
  },
  {
    skill: "LLMs",
    icon: SiPytorch,
  },
  {
    skill: "RAG",
    icon: SiPytorch,
  },
  {
    skill: "Transformers",
    icon: SiPytorch,
  },
  {
    skill: "NumPy",
    icon: DiPython,
  },
  {
    skill: "Pandas",
    icon: DiPython,
  },
  {
    skill: "Scikit-learn",
    icon: DiPython,
  },
  {
    skill: "XGBoost",
    icon: DiPython,
  },
  {
    skill: "REST APIs",
    icon: SiExpress,
  },
  {
    skill: "SQL / NoSQL",
    icon: SiMysql,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 max-w-[1100px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
