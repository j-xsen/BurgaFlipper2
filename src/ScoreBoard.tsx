import {Container, Fullscreen, Text} from "@react-three/uikit";
import {Card, CardHeader, CardTitle} from "@react-three/uikit-default";

type ScoreBoardProps = {
    score: number
}

export default function ScoreBoard(props: ScoreBoardProps) {
    const globalCardProps = {
        borderColor: "teal",
        borderRadius: 10,
        borderStyle: "solid",
        borderWidth: 15,
        backgroundColor: "lightblue"
    }

    return (
        <>
            <Fullscreen flexDirection={"column"}>
                <Container justifyContent={"center"} marginTop={20}>
                    <Card {...globalCardProps} height={150} width={300} justifyContent={"center"}>
                        <CardHeader>
                            <CardTitle>
                                <Text textAlign={"center"} color={"#000066"} fontSize={60}>Score</Text>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Container>
                <Container justifyContent={"center"} marginTop={20}>
                    <Card {...globalCardProps} height={75} width={150} justifyContent={"center"}>
                        <CardHeader padding={0}>
                            <CardTitle>
                                <Text textAlign={"center"} fontSize={30} color={"#006"}>{props.score}</Text>
                            </CardTitle>
                        </CardHeader>
                    </Card>
                </Container>
            </Fullscreen>
        </>
    );
}