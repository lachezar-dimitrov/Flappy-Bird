"use client";

import React, { useEffect } from "react";
import { Canvas } from "../../ui/CanvasUtils";

// Define a game loop specific to the Mario game
function gameLoop(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the background
    ctx.fillStyle = "#87CEEB"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = "#654321"; // Brown color for ground
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Add more game logic here (e.g., drawing Mario, handling movement, etc.)

    // Request the next frame
    requestAnimationFrame(() => gameLoop(ctx, canvas));
}

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
