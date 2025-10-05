import { useState, useEffect, Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components";
import Computer3DModel from "./Computer3DModel";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    // Add listeners for changes to the screen size
    const mobileQuery = window.matchMedia("(max-width: 500px)");
    const tabletQuery = window.matchMedia("(max-width: 1024px)");

    // Set the initial values
    setIsMobile(mobileQuery.matches);
    setIsTablet(tabletQuery.matches);

    // Define callback functions to handle changes
    const handleMobileChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    const handleTabletChange = (event: MediaQueryListEvent) => {
      setIsTablet(event.matches);
    };

    // Add the callbacks as listeners
    mobileQuery.addEventListener("change", handleMobileChange);
    tabletQuery.addEventListener("change", handleTabletChange);

    // Remove listeners when component unmounts
    return () => {
      mobileQuery.removeEventListener("change", handleMobileChange);
      tabletQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computer3DModel isMobile={isMobile} isTablet={isTablet} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
