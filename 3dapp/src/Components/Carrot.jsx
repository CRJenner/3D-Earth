import useSpline from "@splinetool/r3f-spline";
import { OrthographicCamera } from "@react-three/drei";
import React, { useRef, useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useDrag } from "react-use-gesture";


export function Carrot({ ...props }) {
    const CarrotRef = useRef();
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
  const { nodes, materials } = useSpline('https://prod.spline.design/GY2uNRfAEVUqCApr/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#5e6063']} />
      <group {...props} dispose={null}>
        <group name="carrot" ref={CarrotRef}
            position={position}rotation={[0, 0, 0.44]} scale={[0.3, 0.2, 0.33]} {...bind()}>
          <mesh
            name="leave"
            geometry={nodes.leave.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[7.15, 105.74, 17.58]}
            rotation={[-3.1, 0.36, -2.99]}
            scale={0.89}
          />
          <mesh
            name="leave1"
            geometry={nodes.leave1.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[18.69, 106.75, 5.97]}
            rotation={[-0.04, 0.24, 0.07]}
            scale={[1, 1.09, 1]}
          />
          <mesh
            name="leave2"
            geometry={nodes.leave2.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-10.54, 99.15, 5.2]}
            rotation={[-3.09, -0.28, -2.97]}
            scale={[1, 1.09, 1]}
          />
          <mesh
            name="leave3"
            geometry={nodes.leave3.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-7.44, 108.73, -1.66]}
            rotation={[-3.06, 0.36, 2.92]}
            scale={1}
          />
          <mesh
            name="leave4"
            geometry={nodes.leave4.geometry}
            material={materials.leave}
            castShadow
            receiveShadow
            position={[-10.16, 160.22, 8.07]}
            rotation={[0.08, 0, 0]}
            scale={[-1, 1, 1]}
          />
          <mesh
            name="carrot1"
            geometry={nodes.carrot1.geometry}
            material={materials.carrot}
            castShadow
            receiveShadow
            position={[-5.55, -24.25, 0]}
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
        <OrthographicCamera
          name="1"
          makeDefault={true}
          far={100000}
          near={-100000}
          position={[577.35, 577.35, 577.35]}
          rotation={[-Math.PI / 4, 0.62, Math.PI / 6]}
          scale={1}
        />
        <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
      </group>
    </>
  )
}
