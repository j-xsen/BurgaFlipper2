import {Container, Fullscreen} from "@react-three/uikit";
import {Card, CardHeader, CardTitle} from "@react-three/uikit-default";
import React, {useEffect} from "react";
import ScoreTitle from "./ScoreTitle.tsx";
import ScoreText from "./ScoreText.tsx";
import {animated, useSpring} from "@react-spring/three";

type ScoreBoardProps = {
    page: 'home' | 'game',
}


const globalCardProps = {
    borderColor: "darkorange",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 15,
    backgroundColor: "lightyellow"
}

const AnimatedScoreCard = (props:ScoreBoardProps) => {
    const [springs, api] = useSpring(() => ({
        position: [0, 0, 0] as [number, number, number],
        config: {duration: 1000}
    }))

    useEffect(() => {
        if (props.page === "game") {
            api.start({
                position: [0, 10, 10],
                config: {duration: 100},
                onRest: () => {
                    console.log("Done")
                }
            })
        }
    }, [props.page, api]);

    return (
        <Container justifyContent="center" zIndexOffset={-50}>
            <animated.group rotateY={5} position={springs.position}>
                <Card {...globalCardProps} height={75} width={150} justifyContent="center">
                    <CardHeader padding={0}>
                        <CardTitle>
                            <ScoreText/>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </animated.group>
        </Container>
    )


}

function ScoreBoard(props: ScoreBoardProps) {

    return (
        <Fullscreen flexDirection={"column"}>
            <Container justifyContent={"center"} zIndexOffset={50} marginTop={20}>
                <Card {...globalCardProps} height={150} width={300} justifyContent={"center"}>
                    <CardHeader>
                        <CardTitle>
                            <Container>
                                <ScoreTitle page={props.page}/>
                            </Container>
                        </CardTitle>
                    </CardHeader>
                </Card>
            </Container>
            <AnimatedScoreCard page={props.page}/>
        </Fullscreen>
    );
}

export default React.memo(ScoreBoard);

