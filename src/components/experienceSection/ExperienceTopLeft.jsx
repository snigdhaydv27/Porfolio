import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2023
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="8.46" text="CGPA" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="850+" text="LeetCode" />
      </div>
      <p className="text-center">
        B.Tech + M.Tech dual-degree student at NIT Patna building full-stack
        and AI-powered solutions.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
