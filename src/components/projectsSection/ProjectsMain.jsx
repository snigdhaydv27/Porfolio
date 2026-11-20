import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Nutrilens",
    year: "2025",
    align: "right",
    image: "./images/website-img-1.jpg",
    link: "https://github.com/snigdhaydv27/nutrilens",
  },
  {
    name: "ZenG",
    year: "2024",
    align: "left",
    image: "./images/ZenG.png",
    link: "https://github.com/snigdhaydv27/MovieLoom",
  },
  {
    name: "DeFace",
    year: "2025",
    align: "right",
    image: "./images/coder.png",
    link: "https://github.com/snigdhaydv27/DeFace",
  },
  {
    name: "ReLoop",
    year: "2026",
    align: "left",
    image: "./images/spotify.png",
    link: "https://github.com/snigdhaydv27/hackon_AlgoArchitects.git",
  },
  {
    name: "Buddhi (SIH 2025)",
    year: "2025",
    align: "right",
    image: "./images/website-img-3.jpg",
    link: "https://github.com/snigdhaydv27/buddhi_archives.git",
  },
  {
    name: "MURMER",
    year: "2025",
    align: "left",
    image: "./images/website-img-1.jpg",
    link: "https://github.com/snigdhaydv27/Murmer",
  },
  {
    name: "Coder",
    year: "2024",
    align: "right",
    image: "./images/coder.png",
    link: "https://github.com/snigdhaydv27/Coder",
  },
  {
    name: "Spotify Clone",
    year: "2024",
    align: "left",
    image: "./images/spotify.png",
    link: "https://github.com/snigdhaydv27/SpotifyClone",
  },
  {
    name: "Fatafat-News",
    year: "2024",
    align: "right",
    image: "./images/website-img-3.jpg",
    link: "https://github.com/snigdhaydv27/NewsApp",
  },
].sort(
  (firstProject, secondProject) =>
    Number.parseInt(firstProject.year, 10) -
    Number.parseInt(secondProject.year, 10),
);

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={index % 2 === 0 ? "right" : "left"}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;  
