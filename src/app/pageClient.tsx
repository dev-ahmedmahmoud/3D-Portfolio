"use client";

import dynamic from "next/dynamic";
import { Navbar, Hero } from "@/containers";

const About = dynamic(() => import("@/containers/About/About"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Experience = dynamic(() => import("@/containers/Experience/Experience"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Tech = dynamic(() => import("@/containers/Tech/Tech"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Projects = dynamic(() => import("@/containers/Projects/Projects"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Testimonials = dynamic(
  () => import("@/containers/Testimonials/Testimonials"),
  {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  }
);
const Contact = dynamic(() => import("@/containers/Contact/Contact"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Computer3D = dynamic(() => import("@/canvas/Computer/ComputerCanvas"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});
const Stars3D = dynamic(() => import("@/canvas/Stars/StarsCanvas"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero model3D={<Computer3D />} />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Testimonials />
      <div className="relative z-0">
        <Contact />
        <Stars3D />
      </div>
    </div>
  );
}
