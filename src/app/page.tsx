"use client";

import { Button, Container, Heading } from "@/ui/UIComponents";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    const navigateTo = (path: string) => {
        router.push(path);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
            <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <Heading level={1} className="text-4xl font-bold mb-8 text-center">
                    Welcome to the Ultimate Game Hub!
                </Heading>
            </div>

            <Container>
                <div className="navigation-container flex gap-6 items-center">
                    <Button
                        onClick={() => navigateTo("/flappy-bird")}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg"
                    >
                        Play Flappy Bird
                    </Button>
                    <Button
                        onClick={() => navigateTo("/mario")}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg shadow-lg"
                    >
                        Play Mario
                    </Button>
                    <Button
                        onClick={() => navigateTo("/tic-tac-toe")}
                        className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 rounded-lg shadow-lg"
                    >
                        Tic Tac Toe
                    </Button>
                    <Button
                        onClick={() => navigateTo("/chess")}
                        className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg shadow-lg"
                    >
                        Chess
                    </Button>
                    <Button
                        onClick={() => navigateTo("/leaderboard")}
                        className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg"
                    >
                        Leaderboard
                    </Button>
                    <Button
                        onClick={() => navigateTo("/settings")}
                        className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg shadow-lg"
                    >
                        Settings
                    </Button>
                </div>
            </Container>
        </main>
    );
}
