export class GameEngine {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.entities = [];
        this.gravity = 0.5;
        this.scrollOffset = 0;
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    applyGravity(entity) {
        entity.velocityY += this.gravity;
        entity.y += entity.velocityY;

        // Prevent entity from falling below the ground
        if (entity.y > this.canvas.height - entity.height - 50) {
            entity.y = this.canvas.height - entity.height - 50;
            entity.velocityY = 0;
            entity.onGround = true;
        }
    }

    checkCollision(rect1, rect2) {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    renderEntities() {
        this.entities.forEach((entity) => {
            entity.update();
            entity.draw(this.ctx);
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    updateScrollOffset(speed) {
        this.scrollOffset += speed;
    }
}
