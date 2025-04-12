export const PLAYER_WIDTH = 100;
export const PLAYER_HEIGHT = 100;

export interface Player {
    x: number;
    y: number;
    width: number;
    height: number;
    velocityY: number;
    speed: number;
    onGround: boolean;
}

export const player: Player = {
    x: 50,
    y: 0, // Initial position, will be adjusted by gravity
    width: PLAYER_WIDTH,
    height: PLAYER_HEIGHT,
    velocityY: 0,
    speed: 5,
    onGround: false,
};

export function drawPlayer(ctx: CanvasRenderingContext2D, player: Player, image: HTMLImageElement): void {
    ctx.drawImage(image, player.x, player.y, player.width, player.height);
}
