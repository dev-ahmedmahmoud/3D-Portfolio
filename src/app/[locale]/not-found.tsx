"use client";

import dynamic from "next/dynamic";
import { Hero } from "@/containers";

const NotFound4043D = dynamic(() => import("@/canvas/404/404Canvas"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const NotFoundPage = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Hero notFound model3D={<NotFound4043D />} />
    </div>
  );
};

export default NotFoundPage;
