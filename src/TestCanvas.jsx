import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Finalmatch from "./Components/Finalmatch";
import { Environment, OrbitControls } from "@react-three/drei";
import { useGLTF } from "@react-three/drei";

export default function TestCanvas(props) {
  // console.log(props.gltf,'props')
  const data = JSON.stringify(props.gltf);
  console.log(data, "data");
  const { nodes, materials } = useGLTF("../finalmatch.gltf");
  console.log(nodes, "nodes");
  console.log(materials, "nodes");

  return (
    <Canvas
      camera={{
        fov: 2,
        position: [50, 60, 11],
      }}
    >
      <ambientLight intensity={1} />
      <OrbitControls autoRotate={false} enableZoom={false} />
      <Suspense fallback={null}>
        <group {...props} dispose={null}>
          <mesh
            geometry={nodes.Mesh_0.geometry}
            material={materials.Material_0}
            scale={7}
          />
        </group>
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  );
}
useGLTF.preload("../finalmatch.gltf");
