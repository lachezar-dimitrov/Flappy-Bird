import { createImage } from "../../utils/imageUtils";

export class Goomba {
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;

    constructor(x: number, y: number, width: number, height: number, speed: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
    }

    update(): void {
        // Move the Goomba left and right
        this.x += this.speed;

        // Reverse direction if it hits the canvas boundaries
        if (this.x < 0 || this.x + this.width > 800) {
            this.speed *= -1;
        }
    }

    draw(ctx: CanvasRenderingContext2D): void {
        const goombaImage = createImage("assets/mario/creature.png");

        ctx.drawImage(goombaImage, this.x, this.y, this.width, this.height);
    }
}
