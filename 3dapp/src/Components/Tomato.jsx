import useSpline from "@splinetool/r3f-spline";
import { PerspectiveCamera } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "react-use-gesture";
import ReactDOM from "react-dom";

export function Tomato({ ...props }) {
  //const colors = ["hotpink", "red", "blue", "green", "yellow"];
  const ref = useRef();
  const [colorIdx, setColorIdx] = useState(0);
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  useFrame(() => {
    ref.current.rotation.z += 0.01;
    ref.current.rotation.x += 0.01;
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
      <mesh
        position={position}
        {...bind()}
        ref={ref}
        onClick={(e) => {
          if (colorIdx === 4) {
            setColorIdx(0);
          } else {
            setColorIdx(colorIdx + 1);
          }
        }}
        onPointerOver={(e) => console.log("hover")}
        onPointerOut={(e) => console.log("unhover")}
      >
        <color attach="background" args={["#5e6063"]} />
        <group {...props} dispose={null}>
          <group
            name="tomato"
            position={[-4.4, 4.66, 158.7]}
            scale={[0.17, 0.14, 0.19]}
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
      </mesh>
    </>
  );
}

ReactDOM.render(
  <Canvas>
    <spotLight
      intensity={1.2}
      position={[30, 30, 50]}
      angle={0.2}
      penumbra={1}
      castShadow
    />
    <Tomato />
  </Canvas>,
  document.getElementById("root")
);
