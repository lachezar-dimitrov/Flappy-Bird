let keys = {};

// Listen for keydown and keyup events
window.addEventListener("keydown", (e) => {
  keys[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

export function handleInput(mario) {
  if (keys["ArrowLeft"] || keys["KeyA"]) {
    mario.x -= mario.speed;
  }
  if (keys["ArrowRight"] || keys["KeyD"]) {
    mario.x += mario.speed;
  }
  if ((keys["Space"] || keys["ArrowUp"] || keys["KeyW"]) && mario.onGround) {
    mario.velocityY = -10; // Jump velocity
    mario.onGround = false;
  }
}
