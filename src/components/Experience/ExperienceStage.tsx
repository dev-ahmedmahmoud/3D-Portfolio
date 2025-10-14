import { memo } from "react";
import type { IExperience } from "@/types";

interface IExperienceStageProps {
  experience: IExperience;
  onClick?: () => void;
  onPointerOut?: () => void;
  onPointerOver?: () => void;
}

const ExperienceStage = ({ experience, onClick, onPointerOut, onPointerOver }: IExperienceStageProps) => {
  return (
    <div
      onClick={() => onClick && onClick()}
      onPointerOver={() => onPointerOver && onPointerOver()}
      onPointerOut={() => onPointerOut && onPointerOut()}
      className="work-content_container group"
    >
      <div className="flex flex-col h-full justify-start items-center py-2">
        <div className="work-content_logo">
          <img className="w-full h-full" src={experience.icon} alt="" />
        </div>

        <div className="work-content_bar" />
      </div>

      <div className="sm:p-5 px-2.5 py-5">
        <p className="font-bold text-white-800">{experience.companyName}</p>
        <p className="text-sm mb-5">
          {experience.title} -- <span>{experience.date}</span>
        </p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="group-hover:text-white transition-all ease-in-out duration-500"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(ExperienceStage);
