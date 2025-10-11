"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/hooks";
import type { IHeroContent, INavbarContent } from "@/hooks";

interface IHeroProps {
  model3D?: React.ReactNode;
  notFound?: boolean;
}

const Hero = memo(({ model3D, notFound }: IHeroProps) => {
  const heroContent = useContent("hero")() as IHeroContent;
  const navbarContent = useContent("navbar")() as INavbarContent;

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto padding-x flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`hero-head-text text-white`}>
            {heroContent.textual[0]}{" "}
            <span className="text-[#915EFF]">{heroContent.textual[1]}</span>
          </h1>
          <p className={`hero-sub-text mt-2 text-white-100`}>
            {heroContent.textual[2]} <br className="sm:block hidden" />
            {heroContent.textual[3]}
          </p>
        </div>
      </div>

      {model3D}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a
          href={notFound ? "/" : `#${navbarContent?.items?.[0]?.link}`}
          aria-label={navbarContent?.items?.[0]?.name}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
