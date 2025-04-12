"use client";

import { useEffect } from "react";
import { Goomba } from "../../games/mario/enemy";
import { startGame } from "../../games/mario/game";
import { LevelData } from "../../games/mario/level";
import { player } from "../../games/mario/player";
import { Canvas } from "../../ui/canvas";
import { AssetLoader } from "@/services/asset-loader";

export type Images = {
    ground: HTMLImageElement;
    coin: HTMLImageElement;
    mushroom: HTMLImageElement;
    tree: HTMLImageElement;
    background: HTMLImageElement;
    goomba: HTMLImageElement;
    mario: HTMLImageElement;
};

export default function MarioPage() {
    const levelData: LevelData = {
        coins: [
            { x: 200, y: 600 },
            { x: 900, y: 550 },
            { x: 1400, y: 700 },
        ],
    };

    const enemies: Goomba[] = [new Goomba(400, 650, 60, 60, -2), new Goomba(600, 600, 60, 60, -3)];

    useEffect(() => {
        const initializeGame = async () => {
            const canvas = document.getElementById("mario-canvas") as HTMLCanvasElement;
            const ctx = canvas?.getContext("2d");

            if (!ctx) {
                console.error("Failed to get canvas context");
                return;
            }

            const images = await AssetLoader.loadAll(
                {
                    ground: "/mario/ground.png",
                    coin: "/mario/coin.png",
                    mushroom: "/mario/mushroom.png",
                    tree: "/mario/tree.png",
                    background: "/mario/background.png",
                    goomba: "/mario/creature.png",
                    mario: "/mario/female-player.png",
                },
                () => new Image(),
            );

            startGame(ctx, canvas, player, levelData, enemies, images);
        };

        void initializeGame();
    }, []);

    return <Canvas id="mario-canvas" />;
}
