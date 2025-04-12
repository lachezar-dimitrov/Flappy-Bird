import { Images } from "@/app/mario/page";
import { GameEngine } from "../../engine/engine";
import { Goomba } from "./enemy";
import { handleInput, initializeInputListeners } from "./input";
import { LevelData, renderLevel } from "./level";
import { drawMario, Mario } from "./player";

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
    enemies: Goomba[],
    images: Images,
) {
    const engine = new GameEngine(canvas, ctx);
    engine.addEntity(mario);
    enemies.forEach((enemy) => engine.addEntity(enemy));

    function updateGame() {
        // Apply gravity to Mario
        engine.applyGravity(mario);

        // Handle input
        handleInput(mario);

        // Render level, enemies, and Mario
        renderLevel(ctx, canvas, engine.scrollOffset, levelData, images);

        // Update scroll offset
        enemies.forEach((enemy) => {
            enemy.update();
            enemy.draw(ctx, images.goomba);
        });

        // Check for collisions with coins
        drawMario(ctx, mario, images.mario);

        // Render HUD
        renderHUD(ctx, canvas);
    }

    initializeInputListeners();
    engine.start(updateGame);
}
