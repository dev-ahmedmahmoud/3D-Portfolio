import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components";
import Earth from "./Earth3DModel";

const EarthCanvas = ({ isContact }: { isContact?: boolean }) => {
  const isVR = typeof navigator !== "undefined" && /OculusBrowser/i.test(navigator.userAgent);

  const fov = isContact && isVR ? 47 : 45;

  return (
    <Canvas
      shadows
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
