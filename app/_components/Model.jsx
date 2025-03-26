import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import { useRef } from "react";
import { motion } from "framer-motion";
export default function Model(props) {
  const { nodes, materials } = useGLTF("/medias/torus1.glb");
  const { viewport } = useThree();
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });

  const materialProps = {
    thickness: 0.04,
    roughness: 0.09,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.02,
    BackSide: true,
  };
  return (
    <group
      {...props}
      dispose={null}
      scale={Math.min(viewport.width / 3, 2)} // Set maximum scale to 2 (or any desired value)
    >
      <mesh
        ref={mesh}
        {...nodes.Torus002}
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={nodes.Torus002.material}
        rotation={[0, 0, 1.307]}
      >
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/torus1.glb");
