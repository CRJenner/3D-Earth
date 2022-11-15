import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
//import { Physics } from "@react-three/cannon";
import { Suspense } from "react";
////import { Earth } from "./Components/index";
//import { Veggies } from "./Components/Veggies";
//import { Corn } from "./Components/Corn";
//import { VegScene } from "./Components/VegScene";
import { Tomato } from "./Components/Tomato";
import { Carrot } from "./Components/Carrot";


const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>//
            <Carrot />
            <Tomato />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
