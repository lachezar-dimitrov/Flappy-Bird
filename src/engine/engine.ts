export class GameEngine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entities: any[];
    private gravity: number;
    private scrollOffset: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = [];
        this.gravity = 0.5;
        this.scrollOffset = 0;
    }

    addEntity(entity: any): void {
        this.entities.push(entity);
    }

    applyGravity(entity: { velocityY: number; y: number; height: number; onGround?: boolean }): void {
        entity.velocityY += this.gravity;
        entity.y += entity.velocityY;

        // Prevent entity from falling below the ground
        if (entity.y > this.canvas.height - entity.height - 50) {
            entity.y = this.canvas.height - entity.height - 50;
            entity.velocityY = 0;
            entity.onGround = true;
        }
    }

    checkCollision(
        rect1: { x: number; y: number; width: number; height: number },
        rect2: { x: number; y: number; width: number; height: number },
    ): boolean {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    updateScrollOffset(speed: number): void {
        this.scrollOffset += speed;
    }

    start(updateCallback: () => void): void {
        const loop = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            updateCallback();
            requestAnimationFrame(loop);
        };
        loop();
    }
}
