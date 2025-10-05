import { SectionWrapper } from "@/hocs";
import { AnimatedSectionHead, ProjectCard } from "@/components";
import { useContent } from "@/hooks";
import type { IProjectsContent } from "@/hooks";

const Projects = () => {
  const projectsContent = useContent("projects")() as IProjectsContent;

  return (
    <>
      <AnimatedSectionHead
        headline={projectsContent.headline}
        subHeadline={projectsContent.subHeadline}
        introduction={projectsContent.introduction}
      />

      <div className="mt-20 flex flex-wrap gap-7">
        {projectsContent.projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper({ Component: Projects, idName: "projects" });
