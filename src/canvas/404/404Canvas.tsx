import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components";
import NotFound4043D from "./4043DModel";

const NotFound404Canvas = () => {
  return (
    <div className="h-screen flex pt-32 items-center justify-center">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 5]} />
        <Suspense fallback={<Loader />}>
          <NotFound4043D />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NotFound404Canvas;
