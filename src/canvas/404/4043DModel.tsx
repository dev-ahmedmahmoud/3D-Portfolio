import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Center, OrbitControls, Text3D } from "@react-three/drei";
import { Group } from "three";

const NotFound4043DModel = () => {
  const groupRef = useRef<Group>(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  useFrame(() => {
    if (!isUserInteracting && groupRef.current) {
      groupRef.current.rotation.y += 0.005; // gentle auto-rotation
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <Center>
          <Text3D
            font="/fonts/helvetiker_regular.typeface.json"
            size={2}
            height={1.5}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.03}
            bevelSize={0.02}
            bevelSegments={5}
          >
            404
            <meshStandardMaterial color="#915EFF" />
          </Text3D>
        </Center>
      </group>
      <OrbitControls
        enablePan={false}
        onStart={() => setIsUserInteracting(true)}
        onEnd={() => setIsUserInteracting(false)}
      />
    </>
  );
};

export default NotFound4043DModel;
