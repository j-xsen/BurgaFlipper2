import {Container, Fullscreen} from "@react-three/uikit";
import {Card, CardHeader, CardTitle} from "@react-three/uikit-default";
import React from "react";
import ScoreTitle from "./ScoreTitle.tsx";
import ScoreText from "./ScoreText.tsx";

type ScoreBoardProps = {
    page: 'home' | 'game',
}

function ScoreBoard(props: ScoreBoardProps) {

    const globalCardProps = {
        borderColor: "darkorange",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 15,
        backgroundColor: "lightyellow"
    }

    return (
        <>
            <Fullscreen flexDirection={"column"}>
                <Container justifyContent={"center"} marginTop={20}>
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
                {props.page==="game"&&<Container justifyContent={"center"} marginTop={20}>
                    <Card {...globalCardProps} height={75} width={150} justifyContent={"center"}>
                        <CardHeader padding={0}>
                            <CardTitle>
                                <ScoreText/>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Container>}
            </Fullscreen>
        </>
    );
}

export default React.memo(ScoreBoard);

