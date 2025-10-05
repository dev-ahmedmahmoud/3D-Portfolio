"use client";

import { Computer3D, Stars3D } from "@/canvas";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Projects,
  Testimonials,
  Contact,
} from "@/containers";

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
