"use client";

import { useEffect } from "react";
import { Goomba } from "../../games/mario/enemy";
import { startGame } from "../../games/mario/game";
import { LevelData } from "../../games/mario/level";
import { mario } from "../../games/mario/player";
import { Canvas } from "../../ui/CanvasUtils";

export default function MarioPage() {
    // Utility function to create and set the source of an image
    function createImage(src: string): HTMLImageElement {
        const img = new Image();
        img.src = src;
        return img;
    }

    const levelData: LevelData = {
        coins: [
            { x: 100, y: 200 },
            { x: 300, y: 150 },
            { x: 500, y: 100 },
        ],
    };

    const enemies: Goomba[] = [new Goomba(400, 350, 30, 30, -2), new Goomba(600, 350, 30, 30, -3)];

    useEffect(() => {
        const canvas = document.getElementById("mario-canvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            startGame(ctx, canvas, mario, levelData, enemies, createImage);
        }
    }, []);

    return <Canvas id="mario-canvas" />;
}
