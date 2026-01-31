import { memo, Suspense, useCallback, useState } from "react";
import { useMotionValue, animate, motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls, useVideoTexture } from "@react-three/drei";
import { OldComputer3D as DemoComputer } from "@/canvas";
import { AnimatedSectionHead, Image, Loader } from "@/components";
import { SectionWrapper } from "@/hocs";
import { IProjectsContent, useContent } from "@/hooks";

const PreloadVideo = ({ texture }: { texture: string }) => {
  useVideoTexture(texture);
  return null;
};

export const myProjects = [
  {
    href: "https://infowerk.com",
    texture: "/textures/project/project1.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Redux",
        path: "/imgs/tech/redux.webp",
      },
      {
        id: 3,
        name: "Scss",
        path: "/imgs/tech/scss.webp",
      },
    ],
  },
  {
    href: "https://infowerk.com/de/freedesign/#item_group_id=75&delivery_country_code=DE&properties=3766|4560|4357|4396|4382|4365|7012|115|7174|6675|823|840|340|3764&variants=27&product_alias_id=97&label=T-Shirts&is_design_empty=true",
    texture: "/textures/project/project2.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Redux",
        path: "/imgs/tech/redux.webp",
      },
      {
        id: 3,
        name: "Scss",
        path: "/imgs/tech/scss.webp",
      },
    ],
  },
  {
    href: "https://easyprint.com",
    texture: "/textures/project/project3.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Redux",
        path: "/imgs/tech/redux.webp",
      },
      {
        id: 3,
        name: "Scss",
        path: "/imgs/tech/scss.webp",
      },
    ],
  },
  {
    href: "https://print24.com",
    texture: "/textures/project/project4.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Redux",
        path: "/imgs/tech/redux.webp",
      },
      {
        id: 3,
        name: "Scss",
        path: "/imgs/tech/scss.webp",
      },
    ],
  },
  {
    href: "https://unitedprint.com",
    texture: "/textures/project/project5.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Sass",
        path: "/imgs/tech/sass.webp",
      },
    ],
  },
  {
    href: "https://portfolio.ahmedmahmoud.de",
    texture: "/textures/project/project6.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Threejs",
        path: "/imgs/tech/threejs.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    href: "https://iphone15replica.ahmedmahmoud.de",
    texture: "/textures/project/project7.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/imgs/tech/gsap.png",
      },
    ],
  },
  {
    href: "https://productmodeling.ahmedmahmoud.de",
    texture: "/textures/project/project8.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Threejs",
        path: "/imgs/tech/threejs.png",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "GSAP",
        path: "/imgs/tech/gsap.png",
      },
    ],
  },
  {
    href: "https://ahmedmahmoud.de",
    texture: "/textures/project/project9.mp4",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Threejs",
        path: "/imgs/tech/threejs.png",
      },
      {
        id: 3,
        name: "WebXR",
        path: "/imgs/tech/webxr.webp",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 5,
        name: "GSAP",
        path: "/imgs/tech/gsap.png",
      },
    ],
  },
  {
    href: "https://helloxr.ahmedmahmoud.de",
    texture: "/textures/project/project10.mp4",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Nextjs",
        path: "/imgs/tech/nextjs.webp",
      },
      {
        id: 2,
        name: "Threejs",
        path: "/imgs/tech/threejs.png",
      },
      {
        id: 3,
        name: "WebXR",
        path: "/imgs/tech/webxr.webp",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
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
        <div className="flex flex-col justify-between gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <motion.div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold">
              {currentProjectTextualContent.name}
            </p>

            <p>{currentProjectTextualContent.description1}</p>
            <p>{currentProjectTextualContent.description2}</p>
          </motion.div>

          <div>
            <div className="flex items-center justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                {currentProject.tags.map((tag, index) => (
                  <div key={index} className="tech-logo">
                    <Image
                      src={tag.path}
                      alt={tag.name}
                      tailWindWidth="w-10"
                      tailWindHeight="h-10"
                      roundedFull={false}
                      contain
                    />
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
                <Image
                  src="/assets/arrow-up.png"
                  alt="arrow"
                  tailWindWidth="w-3"
                  tailWindHeight="h-3"
                  roundedFull={false}
                  contain
                />
              </a>
            </div>

            <div className="flex justify-between items-center mt-7">
              <button
                className="arrow-btn"
                onClick={() => handleNavigation("previous")}
              >
                <Image
                  src="/assets/left-arrow.png"
                  alt="left arrow"
                  tailWindWidth="w-4"
                  tailWindHeight="h-4"
                  roundedFull={false}
                  contain
                />
              </button>

              <button
                className="arrow-btn"
                onClick={() => handleNavigation("next")}
              >
                <Image
                  src="/assets/right-arrow.png"
                  alt="right arrow"
                  tailWindWidth="w-4"
                  tailWindHeight="h-4"
                  roundedFull={false}
                  contain
                />
              </button>
            </div>
          </div>
        </div >

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
                  {myProjects.map((project) => (
                    <PreloadVideo key={project.texture} texture={project.texture} />
                  ))}
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div >
    </>
  );
};

Projects.displayName = "Projects";

export default SectionWrapper({
  Component: memo(Projects),
  idName: "projects",
});
