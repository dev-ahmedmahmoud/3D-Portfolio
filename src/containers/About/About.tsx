import { memo } from "react";
import { useContent } from "@/hooks";
import type { IAboutContent } from "@/hooks";
import { SectionWrapper } from "@/hocs";
import { AnimatedSectionHead, ServiceCard } from "@/components";

const About = memo(() => {
  const aboutContent = useContent("about")() as IAboutContent;

  return (
    <>
      <AnimatedSectionHead
        headline={aboutContent.headline}
        subHeadline={aboutContent.subHeadline}
        introduction={aboutContent.introduction}
      />

      <div className="mt-20 flex flex-wrap gap-10">
        {aboutContent.services.map((service, index) => (
          <ServiceCard key={service.title} cardIndex={index} {...service} />
        ))}
      </div>
    </>
  );
});

About.displayName = "About";

export default SectionWrapper({ Component: About, idName: "about" });
