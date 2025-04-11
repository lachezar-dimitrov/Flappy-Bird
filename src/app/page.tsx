"use client";

import { Button, Container, Heading } from "@/ui/UIComponents";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Welcome to the Ultimate Game Hub!
                </p>
            </div>

            <Container>
                <Heading level={1}>Welcome to the Game Menu</Heading>
                <div className="navigation-container flex flex-col gap-4">
                    <Button onClick={() => navigateTo("/flappy-bird")}>Play Flappy Bird</Button>
                    <Button onClick={() => navigateTo("/mario")}>Play Mario</Button>
                    <Button onClick={() => navigateTo("/tic-tac-toe")}>Tic Tac Toe</Button>
                    <Button onClick={() => navigateTo("/chess")}>Chess</Button>
                    <Button onClick={() => navigateTo("/leaderboard")}>Leaderboard</Button>
                    <Button onClick={() => navigateTo("/settings")}>Settings</Button>
                </div>
            </Container>
        </main>
    );
}
