import {memo} from "react";
import {Text} from "@react-three/uikit";

type ScoreTitleProps = {
    page: "home" | "game";
};

const ScoreTitle = memo(({page}: ScoreTitleProps) => (
    <>
        <Text
            width={page === "home" ? 200 : 300}
            textAlign="center"
            color="darkorange"
            fontSize={page === "home" ? 45 : 60}
        >
            {page === "home" ? "Burga Flipper" : "Score"}
        </Text>
        <Text color={"orange"} width={50} fontSize={60} textAlign={"right"}
              display={page === "home" ? "flex" : "none"}>2</Text>
    </>
));

export default ScoreTitle;