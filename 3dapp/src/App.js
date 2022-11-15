import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
//import { Veggies } from "./Components/Veggies";
//import { Corn } from "./Components/Corn";
import { VegScene } from "./Components/VegScene";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <VegScene />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
