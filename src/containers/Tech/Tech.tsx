import { memo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { View, Preload } from "@react-three/drei";
import dynamic from "next/dynamic";
import {
  typescript,
  tailwind,
  threejs,
  unity,
  openxr,
  androidxr,
  realitykit,
  webxr,
  nextjs
} from "@/assets";
import { SectionWrapper } from "@/hocs";

const BallCanvas = dynamic(() => import("@/canvas/Ball/BallCanvas"), {
  ssr: false,
  loading: () => <div className="w-28 h-28 flex items-center justify-center">Loading...</div>,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
];

const Tech = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full h-full" ref={containerRef}>
      <div className="flex flex-row flex-wrap justify-center gap-10 z-10 relative">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas imgUrl={technology.icon} />
          </div>
        ))}
      </div>

      <Canvas
        className="canvas"
        eventSource={containerRef as any}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
});

Tech.displayName = "Tech";

export default SectionWrapper({ Component: Tech, idName: "tech" });
