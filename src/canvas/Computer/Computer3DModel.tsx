import { useGLTF } from "@react-three/drei";

interface ComputerProps {
  isMobile: boolean;
  isTablet: boolean;
}

const Computer3DModel = ({ isMobile, isTablet }: ComputerProps) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

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
        scale={isMobile ? 0.325 : isTablet ? 0.45 : 0.7}
        position={
          isMobile
            ? [0, -1.3, -0.5]
            : isTablet
              ? [0, -1.5, -0.7]
              : [0, -2.7, -1.2]
        }
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computer3DModel;
