import {Container, Fullscreen, Text} from "@react-three/uikit";
import {Card, CardHeader, CardTitle} from "@react-three/uikit-default";
import {useEffect, useState} from "react";
import {animated, useSpring} from "@react-spring/three";

type ScoreBoardProps = {
    score: number,
    page: 'home' | 'game',
}

const AnimatedCard = animated(Card);
const AnimatedContainer = animated(Container);

export default function ScoreBoard(props: ScoreBoardProps) {

    const [springs] = useSpring(() => ({
        marginTop: 20,
    }), [])

    const [page, setPage] = useState(props.page);

    useEffect(() => {
        setPage(props.page)
    }, [props.page]);

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
                <AnimatedContainer justifyContent={"center"} marginTop={springs.marginTop}>
                    <AnimatedCard {...globalCardProps} height={150} width={300} justifyContent={"center"}>
                        <CardHeader>
                            <CardTitle>
                                <Container>
                                <Text width={200} textAlign={"center"} color={"darkorange"} fontSize={page === "home" ? 45 : 60}>
                                    {page === "home" ? "Burga Flipper" : "Score"}
                                </Text>
                                <Text color={"orange"} width={50} fontSize={60} textAlign={"right"} display={props.page==="home"?"flex":"none"}>2</Text>
                                </Container>
                            </CardTitle>
                        </CardHeader>
                    </AnimatedCard>
                </AnimatedContainer>
                {page === "game" && (
                    <Container justifyContent={"center"} marginTop={20}>
                        <Card {...globalCardProps} height={75} width={150} justifyContent={"center"}>
                            <CardHeader padding={0}>
                                <CardTitle>
                                    <Text textAlign={"center"} fontSize={30} color={"darkorange"}>{props.score}</Text>
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    </Container>)}
            </Fullscreen>
        </>
    );
}