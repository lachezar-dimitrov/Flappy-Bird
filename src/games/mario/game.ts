import { GameEngine } from "../../engine/engine";
import { handleInput } from "./input";
import { renderLevel, LevelData } from "./level";
import { Goomba } from "./enemy";
import { Mario } from "./player";

const POWER_UP_DURATION = 5000; // 5 seconds

let coinsCollected = 0;
let score = 0;
let lives = 3;
let startTime = Date.now();

function renderHUD(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void {
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(`Coins: ${coinsCollected}`, 10, 20);
    ctx.fillText(`Score: ${score}`, 10, 40);
    ctx.fillText(`Lives: ${lives}`, 10, 60);

    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    ctx.fillText(`Time: ${elapsedTime}s`, canvas.width - 100, 20);
}

export function startGame(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    mario: Mario,
    levelData: LevelData,
    enemies: Goomba[]
): void {
    const engine = new GameEngine(() => {
        handleInput(mario);
        renderLevel(ctx, canvas, mario.x, levelData);
        enemies.forEach((enemy) => {
            enemy.update();
            enemy.draw(ctx);
        });
        renderHUD(ctx, canvas);
    });

    engine.start();
}
