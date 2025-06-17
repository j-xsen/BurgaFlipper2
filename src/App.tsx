import './App.css'
import {Canvas} from "@react-three/fiber";
import {SpotLight} from "@react-three/drei";
import ScoreBoard from "./ScoreBoard.tsx";
import BurgaModel from "./assets/BurgaModel.tsx";
import {useCallback, useState} from "react";

const burgaPos: [number, number, number] = [0, -1.7, 1];
const burgaScale = 1;

function ScoreHandler() {
    const [score, setScore] = useState(0);
    const handleBurgerClick = useCallback(() => {
        setScore(prevScore => prevScore + 1);
    }, []);
    return (
        <>
            <ScoreBoard score={score}/>
            <BurgaModel handleClick={handleBurgerClick} position={burgaPos} scale={burgaScale}/>
        </>
    )
}


function App() {
    return (
        <>
            <Canvas>
                <ambientLight intensity={3.3}/>
                <SpotLight position={[0, 3, 1]} intensity={10} distance={20} attenuation={0} angle={Math.PI / 2}/>
                <ScoreHandler/>
            </Canvas>
        </>
    )
}

export default App
