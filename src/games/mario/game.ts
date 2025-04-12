import { Images } from "@/app/mario/page";
import { GameEngine } from "../../engine/engine";
import { Goomba } from "./enemy";
import { handleInput, initializeInputListeners } from "./input";
import { LevelData, renderLevel } from "./level";
import { drawMario, Mario } from "./player";
import { renderHUD } from "./hud";

const POWER_UP_DURATION = 5000; // 5 seconds

let coinsCollected = 0;
let score = 0;
let lives = 3;
let startTime = Date.now();

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

        // Update scroll offset based on Mario's position without moving Mario
        if (mario.x > canvas.width / 2) {
            engine.updateScrollOffset(mario.x - canvas.width / 2);
            mario.x = canvas.width / 2; // Keep Mario at the center of the screen
        } else if (mario.x < canvas.width / 2 && engine.scrollOffset > 0) {
            engine.updateScrollOffset(mario.x - canvas.width / 2);
            mario.x = canvas.width / 2; // Keep Mario at the center of the screen
        }

        // Render level, enemies, and Mario
        renderLevel(ctx, canvas, engine.scrollOffset, levelData, images);
        enemies.forEach((enemy) => {
            enemy.update();
            enemy.draw(ctx, images.goomba);
        });
        drawMario(ctx, mario, images.mario);

        // Render HUD
        renderHUD(ctx, canvas, coinsCollected, score, lives, startTime);
    }

    initializeInputListeners();
    engine.start(updateGame);
}
