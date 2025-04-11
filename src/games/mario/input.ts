interface Mario {
    x: number;
    y: number;
    speed: number;
    velocityY: number;
    onGround: boolean;
}

const keys: Record<string, boolean> = {};

// Listen for keydown and keyup events
window.addEventListener("keydown", (e: KeyboardEvent) => {
    keys[e.code] = true;
});

window.addEventListener("keyup", (e: KeyboardEvent) => {
    keys[e.code] = false;
});

export function handleInput(mario: Mario): void {
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
