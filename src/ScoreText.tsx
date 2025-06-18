import {memo, useContext} from "react";
import {Text} from "@react-three/uikit";
import ScoreContext from "./ScoreContext";

const ScoreText = memo(() => {
    const ctx = useContext(ScoreContext);
    if (!ctx) return null; // or other fallback
    const {score} = ctx || {score: 0};

    return (
        <>
        <Text textAlign={"center"} fontSize={30} color={"darkorange"}>{score}</Text>
            </>
    );
});

export default ScoreText;
