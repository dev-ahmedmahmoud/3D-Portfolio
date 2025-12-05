import { Suspense } from "react";
import { OrbitControls, View, PerspectiveCamera } from "@react-three/drei";
import Ball3DModel from "./Ball3DModel";

interface IBallCanvasProps {
  imgUrl: string;
}

const BallCanvas = ({ imgUrl }: IBallCanvasProps) => {
  return (
    <View className="w-full h-full">
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={75} />
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        <Ball3DModel imgUrl={imgUrl} />
        <OrbitControls enableZoom={false} />
      </Suspense>
    </View>
  );
};

export default BallCanvas;
