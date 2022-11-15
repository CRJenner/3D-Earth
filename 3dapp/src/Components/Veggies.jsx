import React from "react";
import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";

export function Veggies({ ...props }) {
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/B0qyVdccMtRxO2L0/scene.splinecode"
  );

  return (
    <>
      <color attach="background" args={["#5e6063"]} />
      <group {...props} dispose={null}>
        <group
          name="oinion"
          position={[0.1, 39.19, 19.42]}
          rotation={[0.19, -0.1, -0.48]}
          scale={[1, 1.02, 1]}
        >
          <group name="leaves" position={[-0.79, 109.34, 9.76]}>
            <mesh
              name="leave"
              geometry={nodes.leave.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[12.14, -27.36, -2.06]}
              rotation={[-0.14, -0.93, -0.51]}
              scale={[0.87, 0.87, 0.48]}
            />
            <mesh
              name="leave1"
              geometry={nodes.leave1.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-22.8, -10.06, -0.63]}
              rotation={[0.26, -0.89, 0.27]}
              scale={[1, 1, 0.55]}
            />
            <mesh
              name="leave2"
              geometry={nodes.leave2.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[-3.27, -20.52, 10.55]}
              rotation={[-2.95, -0.1, 2.98]}
              scale={[0.57, 0.57, 0.37]}
            />
            <mesh
              name="leave3"
              geometry={nodes.leave3.geometry}
              material={materials.leaves}
              castShadow
              receiveShadow
              position={[6.27, 22.43, -9]}
              scale={[0.57, 0.57, 0.4]}
            />
          </group>
          <mesh
            name="oinion1"
            geometry={nodes.oinion1.geometry}
            material={materials.oinion}
            castShadow
            receiveShadow
            position={[0, -79.28, 0]}
          />
        </group>
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.7}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={-10000}
          shadow-camera-far={100000}
          shadow-camera-left={-500}
          shadow-camera-right={500}
          shadow-camera-top={500}
          shadow-camera-bottom={-500}
          position={[200, 300, 300]}
        />
        <mesh
          name="Rectangle"
          geometry={nodes.Rectangle.geometry}
          material={materials["Rectangle Material"]}
          castShadow
          receiveShadow
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[0, 0, 1000]}
        />
        <hemisphereLight
          name="Default Ambient Light"
          intensity={1}
          color="#eaeaea"
        />
      </group>
    </>
  );
}
