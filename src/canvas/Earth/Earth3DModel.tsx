import { useGLTF, Clone } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <Clone object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

export default Earth;
