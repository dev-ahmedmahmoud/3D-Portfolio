import { memo } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import { Tilt } from "@jdion/tilt-react";
import { github } from "@/assets";
import Image from "../Image/Image";
import type { IProject } from "@/types";

interface IProjectCardProps {
  project: IProject;
  index: number;
}

const ProjectCard = ({ project, index }: IProjectCardProps) => {
  const { name, description, tags, image, source_code_link } = project;
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      {...fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
          reverse: false,
          perspective: 1000,
          transition: true,
          axis: null,
          reset: true,
          easing: "cubic-bezier(.03,.98,.52,.99)",
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <Image
            src={image}
            alt="project_image"
            tailWindWidth={"w-full"}
            tailWindHeight={"h-full"}
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                contain
                src={github}
                alt="source code"
                tailWindWidth={"w-1/2"}
                tailWindHeight={"h-1/2"}
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default memo(ProjectCard);
