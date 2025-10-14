import { memo, Suspense, useCallback, useState } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { OldComputer3D as DemoComputer } from "@/canvas";
import { AnimatedSectionHead, Loader } from "@/components";
import { SectionWrapper } from "@/hocs";
import { IProjectsContent, useContent } from "@/hooks";

export const myProjects = [
  {
    href: "https://ahmedmahmoud.de",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

const INITIAL_ROTATION_Y = -0.1;

const Projects = () => {
  const projectsContent = useContent("projects")() as IProjectsContent;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction: "previous" | "next") => {
    triggerRotation();
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
      } else {
        return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const rotationY = useMotionValue(INITIAL_ROTATION_Y);

  const triggerRotation = useCallback(() => {
    rotationY.set(Math.PI / 2);
    animate(rotationY, 0, {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    });
  }, [rotationY]);

  const currentProject = myProjects[selectedProjectIndex];
  const currentProjectTextualContent = projectsContent.projects[selectedProjectIndex];

  return (
    <>
      <AnimatedSectionHead
        headline={projectsContent.headline}
        subHeadline={projectsContent.subHeadline}
        introduction={projectsContent.introduction}
      />
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              className="w-10 h-10 shadow-sm"
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <motion.div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold">
              {currentProjectTextualContent.name}
            </p>

            <p>{currentProjectTextualContent.description1}</p>
            <p>{currentProjectTextualContent.description2}</p>
          </motion.div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check Live Site</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas>
            <ambientLight intensity={Math.PI} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<Loader />}>
                <group
                  scale={2}
                  position={[0, -3, 0]}
                  rotation={[0, INITIAL_ROTATION_Y, 0]}
                >
                  <DemoComputer
                    texture={currentProject.texture}
                    rotationY={rotationY}
                  />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </>
  );
};

Projects.displayName = "Projects";

export default SectionWrapper({
  Component: memo(Projects),
  idName: "projects",
});
