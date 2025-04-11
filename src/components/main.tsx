import { useRouter } from "next/router";
import { Button, Container, Heading } from "../ui/uiComponents";

const Main: React.FC = () => {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <Container>
            <Heading level={1}>Welcome to the Game Menu</Heading>
            <Button onClick={() => navigateTo("/flappy-bird")}>Play Flappy Bird</Button>
            <Button onClick={() => navigateTo("/mario")}>Play Mario</Button>
        </Container>
    );
};

export default Main;
