import './App.css'
import {Canvas} from "@react-three/fiber";
import {SpotLight} from "@react-three/drei";
import ScoreBoard from "./ScoreBoard.tsx";
import BurgaModel from "./assets/BurgaModel.tsx";
import {useCallback, useState} from "react";

const burgaHomePos: [number, number, number] = [0, 0, 0];
const burgaGamePos: [number, number, number] = [0, -1.7, 1];

function ScoreHandler(props: {page: 'home' | 'game', setPage: (page: 'home' | 'game') => void}) {
    const [score, setScore] = useState(0);
    const handleBurgerClick = useCallback(() => {
        if(props.page==="home") {
            props.setPage("game");
            return;
        }
        setScore(prevScore => prevScore + 1);
    }, [props]);
    return (
        <>
            <ScoreBoard page={props.page} score={score}/>
            <BurgaModel page={props.page} handleClick={handleBurgerClick} position={props.page=="home"?burgaHomePos:burgaGamePos}/>
        </>
    )
}


function App() {
    const [page, setPage] = useState<'home' | 'game'>('home');
    return (
        <>
            <Canvas>
                <ambientLight intensity={10}/>
                <SpotLight position={[0, 3, 1]} intensity={10} distance={20} attenuation={0} angle={Math.PI / 2}/>
                <ScoreHandler page={page} setPage={setPage}/>
            </Canvas>
        </>
    )
}

export default App
