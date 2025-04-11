export class Goomba {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  update() {
    // Move the Goomba left and right
    this.x += this.speed;

    // Reverse direction if it hits the canvas boundaries
    if (this.x < 0 || this.x + this.width > 800) {
      this.speed *= -1;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "brown"; // Placeholder color for Goomba
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
