// Decouple the game loop from the initializeFlappyBirdGame function

// Shared variables and constants
let birdX = 50;
let birdY = 150;
let birdVelocity = 0;
const FLAP_SPEED = -3;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const GRAVITY = 0.1;
let gameContainer: HTMLElement;
let birdElement: HTMLElement;

// Initialize the Flappy Bird game
export function initializeFlappyBirdGame(containerId: string) {
    // Clear the game container before creating a new game
    gameContainer = document.getElementById(containerId) as HTMLElement;
    if (gameContainer) {
        gameContainer.innerHTML = "";
    }

    // Create the bird element
    birdElement = document.createElement("div");
    birdElement.style.position = "absolute";
    birdElement.style.width = `${BIRD_WIDTH}px`;
    birdElement.style.height = `${BIRD_HEIGHT}px`;
    birdElement.style.backgroundColor = "yellow";
    birdElement.style.top = `${birdY}px`;
    birdElement.style.left = `${birdX}px`;
    birdElement.style.borderRadius = "50%";
    gameContainer.appendChild(birdElement);

    // Event listener for bird flap
    function flap() {
        birdVelocity = FLAP_SPEED;
    }

    document.body.onkeyup = (e) => {
        if (e.code === "Space") flap();
    };

    document.body.onclick = flap;

    // Start the game loop
    requestAnimationFrame(gameLoop);
}

// Game loop
function gameLoop() {
    // Apply gravity
    birdVelocity += GRAVITY;
    birdY += birdVelocity;

    // Prevent the bird from falling below the container
    const containerHeight = gameContainer.offsetHeight;
    if (birdY + BIRD_HEIGHT > containerHeight) {
        birdY = containerHeight - BIRD_HEIGHT;
        birdVelocity = 0;
    }

    // Prevent the bird from going above the container
    if (birdY < 0) {
        birdY = 0;
        birdVelocity = 0;
    }

    // Update bird position
    birdElement.style.top = `${birdY}px`;

    // Request the next frame
    requestAnimationFrame(gameLoop);
}
