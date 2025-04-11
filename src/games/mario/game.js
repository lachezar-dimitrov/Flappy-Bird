import { GameEngine } from "../../engine/engine.js";
import { handleInput } from "./input.js";
import { renderLevel } from "./level.js";
import { Goomba } from "./enemy.js";
import { MARIO_WIDTH, MARIO_HEIGHT } from "./player.js";

const POWER_UP_DURATION = 5000; // 5 seconds

let coinsCollected = 0;
let score = 0;
let lives = 3;
let startTime = Date.now();

function renderHUD(ctx, canvas) {
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(`Coins: ${coinsCollected}`, 10, 20);
    ctx.fillText(`Score: ${score}`, 10, 40);
    ctx.fillText(`Lives: ${lives}`, 10, 60);

    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    ctx.fillText(`Time: ${elapsedTime}s`, canvas.width - 100, 20);
}

const levels = [
    {
        coins: [
            { x: 150, y: 300 },
            { x: 300, y: 250 },
            { x: 450, y: 200 },
        ],
    },
    {
        coins: [
            { x: 200, y: 300 },
            { x: 400, y: 250 },
            { x: 600, y: 200 },
        ],
    },
];

let currentLevelIndex = 0;

export function gameLoop(ctx, canvas) {
    const engine = new GameEngine(canvas, ctx);

    const mario = {
        x: 50,
        y: canvas.height - MARIO_HEIGHT - 50,
        width: MARIO_WIDTH,
        height: MARIO_HEIGHT,
        velocityY: 0,
        speed: 5,
        onGround: true,
        hasPowerUp: false,
        powerUpEndTime: 0,
        update() {
            handleInput(this);
            engine.applyGravity(this);
        },
        draw(ctx) {
            ctx.fillStyle = this.hasPowerUp ? "blue" : "red";
            ctx.fillRect(this.x, this.y, this.width, this.height);
        },
    };

    engine.addEntity(mario);

    const levelData = levels[currentLevelIndex];

    function loop() {
        engine.clearCanvas();

        renderLevel(ctx, canvas, engine.scrollOffset, levelData);
        renderHUD(ctx, canvas);

        engine.renderEntities();

        levelData.coins = levelData.coins.filter((coin) => {
            if (
                engine.checkCollision(mario, {
                    x: coin.x - engine.scrollOffset,
                    y: coin.y,
                    width: 20,
                    height: 20,
                })
            ) {
                console.log("Coin collected!");
                coinsCollected += 1;
                score += 10;
                return false;
            }
            return true;
        });

        if (levelData.coins.length === 0) {
            console.log("Level Complete!");
            currentLevelIndex += 1;
            if (currentLevelIndex < levels.length) {
                navigateTo("/level-complete");
            } else {
                console.log("All levels complete!");
                navigateTo("/game-over");
            }
            return;
        }

        engine.updateScrollOffset(mario.speed);

        requestAnimationFrame(loop);
    }

    loop();
}
