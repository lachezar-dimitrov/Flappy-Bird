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
    const GRAVITY = 0.5;
    const FLOOR_Y = canvas.height - mario.height; // Assuming the ground is at the bottom of the canvas

    function gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Apply gravity
        if (!mario.onGround) {
            mario.velocityY += GRAVITY;
        }
        mario.y += mario.velocityY;

        // Check for ground collision
        if (mario.y >= FLOOR_Y) {
            mario.y = FLOOR_Y;
            mario.velocityY = 0;
            mario.onGround = true;
        } else {
            mario.onGround = false;
        }

        // Handle input
        handleInput(mario);

        // Render level, enemies, and Mario
        renderLevel(ctx, canvas, 0, levelData, images);
        enemies.forEach((enemy) => {
            enemy.update();
            enemy.draw(ctx, images.goomba);
        });
        drawMario(ctx, mario, images.mario);

        // Render HUD
        renderHUD(ctx, canvas);

        requestAnimationFrame(gameLoop);
    }

    initializeInputListeners();
    gameLoop();
}
