import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I am Snigdha a skilled web developer with expertise in React.js,
        Node.js, Express.js, MongoDB, and Tailwind CSS. I have built multiple
        projects, including ZenG, a movie and TV series discovery platform for
        Gen-Z, a Spotify clone, a chat and video calling app, and a news app
        using React.js and News API. With strong problem-solving skills and
        experience in Docker, TypeScript, and SQL databases, they excel at
        building efficient, scalable web applications. Passionate about coding
        and constantly improving, they have also contributed solutions to
        LeetCode and GeeksforGeeks while refining their skills in DSA and
        backend optimization.
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
