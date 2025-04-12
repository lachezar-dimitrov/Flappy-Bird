import { canvasDimensions } from "@/ui/CanvasUtils";

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
        if (this.x < 0 || this.x + this.width > canvasDimensions.width) {
            this.speed *= -1;
        }
    }

    draw(ctx: CanvasRenderingContext2D, goombaImage: HTMLImageElement): void {
        ctx.drawImage(goombaImage, this.x, this.y, this.width, this.height);
    }
}
