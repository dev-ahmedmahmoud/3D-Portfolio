import { Suspense } from "react";
import { OrbitControls, Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@/components";
import Ball3DModel from "./Ball3DModel";

interface IBallCanvasProps {
  imgUrl: string;
}

const BallCanvas = ({ imgUrl }: IBallCanvasProps) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <Ball3DModel imgUrl={imgUrl} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
