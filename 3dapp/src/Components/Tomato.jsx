import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "react-use-gesture";


export function Tomato({ ...props }) {
  
  const tomatoRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  
  useFrame(({ clock}) => {
    const elapsedTime = clock.getElapsedTime();  
    // tomatoRef.current.rotation.y = elapsedTime / 1;
  });

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const { nodes, materials } = useSpline(
    "https://prod.spline.design/cG20aDE1GaEilJ9u/scene.splinecode"
  );
  return (
    <>
        <color attach="background" args={["#5e6063"]} />
        <group {...props} dispose={null}>
          <group
            name="tomato" ref={tomatoRef}
            position={position}
            scale={[0.17, 0.14, 0.19]} {...bind()}
          >
            <mesh
              name="tomato1"
              geometry={nodes.tomato1.geometry}
              material={materials.tomato}
              castShadow
              receiveShadow
              position={[4.46, -49.27, 2.02]}
              scale={1.03}
            />
            <group name="rop and leaves" position={[0.69, 149.22, -0.09]}>
              <mesh
                name="leave"
                geometry={nodes.leave.geometry}
                material={materials["rop and leave"]}
                castShadow
                receiveShadow
                position={[86.31, -20.56, 67.73]}
                rotation={[-3.1, 0.68, 3.11]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="leave1"
                geometry={nodes.leave1.geometry}
                material={materials["rop and leave"]}
                castShadow
                receiveShadow
                position={[-31.3, -28.34, -80.7]}
                rotation={[-Math.PI, 1.2, 0]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="leave2"
                geometry={nodes.leave2.geometry}
                material={materials["rop and leave"]}
                castShadow
                receiveShadow
                position={[-9.42, -18.64, -93.24]}
                rotation={[-2.82, 1.44, -0.21]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="leave3"
                geometry={nodes.leave3.geometry}
                material={materials["rop and leave"]}
                castShadow
                receiveShadow
                position={[-73.14, -15.41, 52.31]}
                rotation={[-Math.PI, -0.52, 0.07]}
                scale={[-1, 1, 1]}
              />
              <mesh
                name="rop"
                geometry={nodes.rop.geometry}
                material={materials["rop and leave"]}
                castShadow
                receiveShadow
                position={[-22.2, 48.13, 5.23]}
                rotation={[0, 0, -2.53]}
                scale={2.77}
              />
            </group>
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
          <PerspectiveCamera
            name="1"
            makeDefault={true}
            far={100000}
            near={5}
            fov={45}
            position={[0, 0, 1000]}
          />
          <hemisphereLight
            name="Default Ambient Light"
            intensity={0.75}
            color="#eaeaea"
          />
        </group>
    </>
  );
}

