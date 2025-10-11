import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";

interface IModelPosition {
  scale: number;
  position: [number, number, number];
}

const mapWidthToPosition = (width: number): IModelPosition => {
  return width <= 450
    ? { scale: 0.325, position: [0, -1.3, -0.5] }
    : width <= 500
      ? { scale: 0.325, position: [0, -1.7, -0.5] }
      : width <= 586
        ? { scale: 0.45, position: [0, -2.5, -0.7] }
        : width <= 639
        ? { scale: 0.45, position: [0, -2.0, -0.7] }
        : width <= 762
        ? { scale: 0.4, position: [0, -2.7, -0.7] }
        : width <= 1024
        ? { scale: 0.5, position: [0, -2.3, -0.7] }
        : { scale: 0.6, position: [0, -2.5, -1.2] };
};

const Computer3DModel = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  const [modelPosition, setModelPosition] = useState<IModelPosition>(
    mapWidthToPosition(window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () =>
      setModelPosition(mapWidthToPosition(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={2} groundColor="violet" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10000}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={modelPosition.scale}
        position={modelPosition.position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computer3DModel;
