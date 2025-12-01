import { useEffect, useRef, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import { Mesh, SkinnedMesh } from "three";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef(null);

  const { scene } = useGLTF("/models/animations/developer.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "/models/animations/salute.fbx"
  );
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/clapping.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/animations/victory.fbx"
  );
  const { animations: breakAnimation } = useFBX(
    "/models/animations/break.fbx"
  );

  idleAnimation[0].name = "idle";
  saluteAnimation[0].name = "salute";
  clappingAnimation[0].name = "clapping";
  victoryAnimation[0].name = "victory";
  breakAnimation[0].name = "break";

  const { actions } = useAnimations(
    [
      idleAnimation[0],
      saluteAnimation[0],
      clappingAnimation[0],
      victoryAnimation[0],
      breakAnimation[0],
    ],
    group
  );

  useEffect(() => {
    actions[animationName]?.reset().fadeIn(0.5).play();
    return () => {
      actions[animationName]?.fadeOut(0.5);
    };
  }, [animationName]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Hair as Mesh).geometry}
        material={materials.Wolf3D_Hair}
        skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Glasses as Mesh).geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Body as Mesh).geometry}
        material={materials.Wolf3D_Body}
        skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Bottom as Mesh).geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Footwear as Mesh).geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        geometry={(nodes.Wolf3D_Outfit_Top as Mesh).geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={(nodes.EyeLeft as Mesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeLeft as Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeLeft as Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={(nodes.EyeRight as Mesh).geometry}
        material={materials.Wolf3D_Eye}
        skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.EyeRight as Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.EyeRight as Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={(nodes.Wolf3D_Head as Mesh).geometry}
        material={materials.Wolf3D_Skin}
        skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Head as Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Head as Mesh).morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={(nodes.Wolf3D_Teeth as Mesh).geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
        morphTargetDictionary={(nodes.Wolf3D_Teeth as Mesh).morphTargetDictionary}
        morphTargetInfluences={(nodes.Wolf3D_Teeth as Mesh).morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/developer.glb");
useFBX.preload("/models/animations/idle.fbx");
useFBX.preload("/models/animations/salute.fbx");
useFBX.preload("/models/animations/clapping.fbx");
useFBX.preload("/models/animations/victory.fbx");
useFBX.preload("/models/animations/break.fbx");


export default Developer;
