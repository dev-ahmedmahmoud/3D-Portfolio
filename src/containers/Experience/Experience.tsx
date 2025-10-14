import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SectionWrapper } from "@/hocs";
import { useContent, IExperienceContent } from "@/hooks";
import { AnimatedSectionHead, ExperienceStage, Loader } from "@/components";
import { Developer } from "@/canvas";

const ANIMATIONS = ["victory", "clapping", "salute", "victory"];

const WorkExperience = () => {
  const experienceContent = useContent("experience")() as IExperienceContent;

  const [animationName, setAnimationName] = useState("idle");

  const onClick = (index: number) =>
    setAnimationName(ANIMATIONS[index].toLowerCase());
  const onPointerOver = (index: number) =>
    setAnimationName(ANIMATIONS[index].toLowerCase());
  const onPointerOut = () => setAnimationName("idle");

  return (
    <div className="w-full text-white-600">
      <AnimatedSectionHead
        headline={experienceContent.headline}
        subHeadline={experienceContent.subHeadline}
      />

      <div className="work-container">
        <div className="work-canvas">
          <Canvas>
            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<Loader />}>
              <Developer
                position-y={-3}
                scale={2.7}
                animationName={animationName}
                rotation-x={0.4}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="work-content">
          <div className="sm:py-10 py-5 sm:px-5 px-2.5">
            {experienceContent.experiences.map((item, index) => (
              <ExperienceStage
                key={`experience-${index}`}
                experience={item}
                onClick={() => onClick(index)}
                onPointerOver={() => onPointerOver(index)}
                onPointerOut={() => onPointerOut()}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

WorkExperience.displayName = "WorkExperience";

export default SectionWrapper({
  Component: WorkExperience,
  idName: "experience",
});
