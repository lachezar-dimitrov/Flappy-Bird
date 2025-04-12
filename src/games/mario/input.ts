interface Mario {
    x: number;
    y: number;
    speed: number;
    velocityY: number;
    onGround: boolean;
}

const keys: Record<string, boolean> = {};

const DEFAULT_KEYS = {
    left: ["ArrowLeft", "KeyA"],
    right: ["ArrowRight", "KeyD"],
    jump: ["Space", "ArrowUp", "KeyW"],
};

export function initializeInputListeners(): void {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
        keys[e.code] = true;
    });

    window.addEventListener("keyup", (e: KeyboardEvent) => {
        keys[e.code] = false;
    });
}

export function handleInput(mario: Mario, keysConfig = DEFAULT_KEYS): void {
    if (keysConfig.left.some((key) => keys[key])) {
        mario.x -= mario.speed;
    }
    if (keysConfig.right.some((key) => keys[key])) {
        mario.x += mario.speed;
    }
    if (keysConfig.jump.some((key) => keys[key]) && mario.onGround) {
        mario.velocityY = -10; // Jump velocity
        mario.onGround = false;
    }
}
