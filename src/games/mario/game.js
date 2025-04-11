import { handleInput } from "./input.js";
import { renderLevel } from "./level.js";
import { Goomba } from "./enemy.js";
import { MARIO_WIDTH, MARIO_HEIGHT } from "./player.js";

const GRAVITY = 0.5;

export function gameLoop(ctx, canvas) {
    // Mario object
    const mario = {
        x: 50,
        y: canvas.height - MARIO_HEIGHT - 50, // Adjusted for ground height
        width: MARIO_WIDTH,
        height: MARIO_HEIGHT,
        velocityY: 0,
        speed: 5,
        onGround: true,
    };

    // Create a Goomba instance
    const goomba = new Goomba(300, canvas.height - 80, 30, 30, 2);

    function checkCollision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    function loop() {
        // Render the level
        renderLevel(ctx, canvas);

        // Handle input
        handleInput(mario);

        // Apply gravity
        mario.velocityY += GRAVITY;
        mario.y += mario.velocityY;

        // Prevent Mario from falling below the ground
        if (mario.y > canvas.height - mario.height - 50) {
            mario.y = canvas.height - mario.height - 50;
            mario.velocityY = 0;
            mario.onGround = true;
        }

        // Update and draw the Goomba
        goomba.update();
        goomba.draw(ctx);

        // Check for collision between Mario and the Goomba
        if (checkCollision(mario, goomba)) {
            console.log("Collision detected!");
            // Placeholder: End the game or defeat the Goomba
        }

        // Draw Mario (placeholder rectangle)
        ctx.fillStyle = "red";
        ctx.fillRect(mario.x, mario.y, mario.width, mario.height);

        // Request the next frame
        requestAnimationFrame(loop);
    }

    loop();
}
