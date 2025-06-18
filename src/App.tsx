import './App.css'
import {Canvas} from "@react-three/fiber";
import {SpotLight} from "@react-three/drei";
import ScoreBoard from "./ScoreBoard.tsx";
import BurgaModel from "./assets/BurgaModel.tsx";
import {memo, useCallback, useState} from "react";
import ScoreContext from "./ScoreContext.tsx";

const burgaHomePos: [number, number, number] = [0, 0, 0];
const burgaGamePos: [number, number, number] = [0, -1.7, 1];

const ScoreHandler = memo(function ScoreHandler(props: {
    page: 'home' | 'game',
    setPage: (page: 'home' | 'game') => void
}) {
    const handleBurgerClick = useCallback(() => {
        if (props.page === "home") {
            props.setPage("game");
            return;
        }
    }, [props]);
    return (
        <>
            <ScoreBoard page={props.page}/>
            <BurgaModel page={props.page} handleClick={handleBurgerClick}
                        position={props.page == "home" ? burgaHomePos : burgaGamePos}/>
        </>
    )
});

const App = memo(function App() {
    const [page, setPage] = useState<'home' | 'game'>('home');
    const [score, setScore] = useState(0);
    return (
            <Canvas
            gl={{powerPreference: "high-performance",antialias:true,stencil:true,depth:true}}>
                <ScoreContext.Provider value={{score, setScore}}>
                    <ambientLight intensity={1}/>
                    <SpotLight position={[0, 3, 1]} intensity={15} color={"yellow"} distance={20} attenuation={0}
                               angle={Math.PI / 2}/>
                    <ScoreHandler page={page} setPage={setPage}/>
                </ScoreContext.Provider>
            </Canvas>
    )
});

export default App