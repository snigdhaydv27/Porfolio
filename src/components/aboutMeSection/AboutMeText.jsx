import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Snigdha Kumar, a Computer Science and Engineering student at NIT
        Patna pursuing a B.Tech + M.Tech dual degree. I build full-stack
        applications with React, Next.js, Node.js, and modern databases, while
        exploring machine learning, deep learning, LLMs, and RAG systems.
        <br />
        <br />
        My work includes Nutrilens, a QR-based food traceability platform,
        ZenG, a Gen-Z entertainment discovery app, and AI projects such as
        DeFace and ReLoop. I enjoy turning complex problems into reliable
        products and have solved 850+ problems on LeetCode.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
