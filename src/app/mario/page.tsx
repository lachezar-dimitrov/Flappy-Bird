"use client";

import { useEffect } from "react";
import { Goomba } from "../../games/mario/enemy";
import { startGame } from "../../games/mario/game";
import { LevelData } from "../../games/mario/level";
import { mario } from "../../games/mario/player";
import { Canvas } from "../../ui/CanvasUtils";

export type Images = {
    ground: HTMLImageElement;
    coin: HTMLImageElement;
    mushroom: HTMLImageElement;
    tree: HTMLImageElement;
    background: HTMLImageElement;
    goomba: HTMLImageElement;
    mario: HTMLImageElement;
};

class AssetLoader {
    private static cache: Map<string, HTMLImageElement> = new Map();

    static async load(src: string): Promise<HTMLImageElement> {
        if (this.cache.has(src)) return this.cache.get(src)!;

        const img = new Image();
        img.src = src;

        await new Promise<void>((resolve, reject) => {
            img.onload = () => resolve();
            img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
                reject(`Failed to load image: ${src}`);
            };
        });

        this.cache.set(src, img);
        return img;
    }

    static async loadAll(sources: Record<keyof Images, string>): Promise<Images> {
        const entries = await Promise.all(
            Object.entries(sources).map(async ([key, path]) => [key, await this.load(path)]),
        );
        return Object.fromEntries(entries) as Images;
    }
}

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

            const images = await AssetLoader.loadAll({
                ground: "/mario/ground.png",
                coin: "/mario/coin.png",
                mushroom: "/mario/mushroom.png",
                tree: "/mario/tree.png",
                background: "/mario/background.png",
                goomba: "/mario/creature.png",
                mario: "/mario/player.png",
            });

            startGame(ctx, canvas, mario, levelData, enemies, images);
        };

        void initializeGame();
    }, []);

    return <Canvas id="mario-canvas" />;
}
