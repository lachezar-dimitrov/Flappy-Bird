type Rectangle = {
    x: number;
    y: number;
    width: number;
    height: number;
};

type Entity = {};

export class GameEngine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private entities: Entity[];
    private gravity: number;
    public scrollOffset: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = [];
        this.gravity = 0.5;
        this.scrollOffset = 0;
    }

    addEntity(entity: Entity): void {
        this.entities.push(entity);
    }

    applyGravity(entity: { velocityY: number; y: number; height: number; onGround?: boolean }): void {
        entity.velocityY += this.gravity;
        entity.y += entity.velocityY;

        // Prevent entity from falling below the ground
        if (entity.y > this.canvas.height - entity.height - 30) {
            entity.y = this.canvas.height - entity.height - 30;
            entity.velocityY = 0;
            entity.onGround = true;
        }
    }

    checkCollision(rectangleOne: Rectangle, rectangleTwo: Rectangle): boolean {
        return (
            rectangleOne.x < rectangleTwo.x + rectangleTwo.width &&
            rectangleOne.x + rectangleOne.width > rectangleTwo.x &&
            rectangleOne.y < rectangleTwo.y + rectangleTwo.height &&
            rectangleOne.y + rectangleOne.height > rectangleTwo.y
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
