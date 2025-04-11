import React, { useEffect } from "react";
import { Canvas } from "../../ui/CanvasUtils";
import { gameLoop } from "./game";

const MarioGame: React.FC = () => {
    useEffect(() => {
        const canvas = document.getElementById("mario-canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            gameLoop(ctx, canvas);
        }
    }, []);

    return (
        <div id="game-container">
            <Canvas id="mario-canvas" width={800} height={400} />
        </div>
    );
};

export default MarioGame;
