"use client";

import { NotFound4043D } from "@/canvas";
import { Hero } from "@/containers";

const NotFoundPage = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero notFound model3D={<NotFound4043D />} />
    </div>
  );
};

export default NotFoundPage;
