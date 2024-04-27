import React, { Suspense, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Test2(props) {
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
        <Model {...props} />
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  );
}

function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("../scene.gltf");
  const { actions } = useAnimations(animations, group);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="EARTH">
              <mesh
                name="EARTH_0"
                geometry={nodes.EARTH_0.geometry}
                material={materials["Material.001"]}
              />
            </group>
            <group name="Armature">
              <primitive object={nodes.Armature_rootJoint} />
              <group name="ATM" scale={1.007} />
              <skinnedMesh
                name="ATM_0"
                geometry={nodes.ATM_0.geometry}
                material={materials["Material.002"]}
                skeleton={nodes.ATM_0.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("../scene.gltf");

