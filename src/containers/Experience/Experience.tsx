import { memo } from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { SectionWrapper } from "@/hocs";
import { AnimatedSectionHead, ExperienceStage } from "@/components";
import { useContent } from "@/hooks";
import type { IExperienceContent } from "@/hooks";

const Experience = memo(() => {
  const experienceContent = useContent("experience")() as IExperienceContent;

  return (
    <>
      <AnimatedSectionHead
        headline={experienceContent.headline}
        subHeadline={experienceContent.subHeadline}
        introduction={experienceContent.introduction}
      />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experienceContent.experiences.map((experience, index) => (
            <ExperienceStage
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
});

Experience.displayName = "Experience";

export default SectionWrapper({ Component: Experience, idName: "experience" });
