export const PLAYER_WIDTH = 100;
export const PLAYER_HEIGHT = 100;

export interface Player {
    x: number;
    y: number;
    width: number;
    height: number;
    velocityX: number; // Added to track horizontal velocity
    velocityY: number;
    speed: number;
    onGround: boolean;
    direction: "left" | "right"; // Added to track the player's direction
}

export const player: Player = {
    x: 50,
    y: 0, // Initial position, will be adjusted by gravity
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    velocityX: 0, // Initialize horizontal velocity
    velocityY: 0,
    speed: 5,
    onGround: false,
    direction: "right", // Default direction
};

export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player, image: HTMLImageElement): void {
    ctx.save(); // Save the current canvas state

    // Flip the image horizontally if the direction is "left"
    if (player.direction === "left") {
        ctx.scale(-1, 1);
        ctx.drawImage(
            image,
            -player.x - player.width, // Adjust x position for flipped image
            player.y,
            player.width,
            player.height
        );
    } else {
        ctx.drawImage(image, player.x, player.y, player.width, player.height);
    }

    ctx.restore(); // Restore the canvas state
}
