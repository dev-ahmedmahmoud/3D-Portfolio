import { memo } from "react";
import dynamic from "next/dynamic";
import {
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  threejs,
  git,
  unity,
  openxr,
  androidxr,
  realitykit,
  webxr,
} from "@/assets";
import { SectionWrapper } from "@/hocs";

const Ball3D = dynamic(() => import("@/canvas/Ball/BallCanvas"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

interface ITechnology {
  name: string;
  icon: string;
}

const technologies: ITechnology[] = [
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "OpenXR",
    icon: openxr,
  },
  {
    name: "AndroidXR",
    icon: androidxr,
  },
  {
    name: "WebXR",
    icon: webxr,
  },
  {
    name: "RealityKit",
    icon: realitykit,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const Tech = memo(() => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Ball3D imgUrl={technology.icon} />
        </div>
      ))}
    </div>
  );
});

Tech.displayName = "Tech";

export default SectionWrapper({ Component: Tech, idName: "tech" });
