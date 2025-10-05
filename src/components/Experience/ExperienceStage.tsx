import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "../Image/Image";
import type { IExperience } from "@/types";

interface IExperienceStageProps {
  experience: IExperience;
}

const ExperienceStage = ({ experience }: IExperienceStageProps) => {
  return (
    <VerticalTimelineElement
      visible
      className="vertical-timeline-element--work"
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            contain
            src={experience.icon}
            alt={experience.companyName}
            tailWindWidth={"w-[60%]"}
            tailWindHeight={"h-[60%]"}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceStage;
