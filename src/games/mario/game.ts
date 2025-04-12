import { Images } from "@/app/mario/page";
import { GameEngine } from "../../engine/engine";
import { Goomba } from "./enemy";
import { handleInput, initializeInputListeners } from "./input";
import { LevelData, renderLevel } from "./level";
import { drawPlayer, Player } from "./player";
import { renderHUD } from "./hud";

const POWER_UP_DURATION = 5000; // 5 seconds

let coinsCollected = 0;
let score = 0;
let lives = 3;
let startTime = Date.now();

export function startGame(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    mainPlayer: Player,
    levelData: LevelData,
    enemies: Goomba[],
    images: Images,
) {
    const engine = new GameEngine(canvas, ctx);
    engine.addEntity(mainPlayer);
    enemies.forEach((enemy) => engine.addEntity(enemy));

    function updateGame() {
        // Apply gravity to Mario
        engine.applyGravity(mainPlayer);

        // Handle input
        handleInput(mainPlayer);

        // Update scroll offset based on Mario's position without moving Mario
        if (mainPlayer.x > canvas.width / 2) {
            engine.updateScrollOffset(mainPlayer.x - canvas.width / 2);
            mainPlayer.x = canvas.width / 2; // Keep Mario at the center of the screen
        } else if (mainPlayer.x < canvas.width / 2 && engine.scrollOffset > 0) {
            engine.updateScrollOffset(mainPlayer.x - canvas.width / 2);
            mainPlayer.x = canvas.width / 2; // Keep Mario at the center of the screen
        }

        // Render level, enemies, and Mario
        renderLevel(ctx, canvas, engine.scrollOffset, levelData, images);

        enemies.forEach((enemy) => {
            enemy.update();
            enemy.draw(ctx, images.goomba);
        });

        drawPlayer(ctx, mainPlayer, images.mario);

        // Render HUD
        renderHUD(ctx, canvas, coinsCollected, score, lives, startTime);
    }

    initializeInputListeners();
    engine.start(updateGame);
}
