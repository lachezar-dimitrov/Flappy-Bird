// Decouple the game loop from the initializeFlappyBirdGame function

// Shared variables and constants
let birdX = 50;
let birdY = 150;
let birdVelocity = 0;
const FLAP_SPEED = -3;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const GRAVITY = 0.1;
let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let flappyImg: HTMLImageElement;

// Draw the background
function drawBackground() {
    ctx.fillStyle = "#87CEEB"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw ground
    ctx.fillStyle = "#654321"; // Brown color for ground
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
}

// Game loop
export function gameLoop() {
    // Draw the background
    drawBackground();

    // Apply gravity
    birdVelocity += GRAVITY;
    birdY += birdVelocity;

    // Prevent the bird from falling below the canvas
    if (birdY + BIRD_HEIGHT > canvas.height - 50) {
        birdY = canvas.height - 50 - BIRD_HEIGHT;
        birdVelocity = 0;
    }

    // Prevent the bird from going above the canvas
    if (birdY < 0) {
        birdY = 0;
        birdVelocity = 0;
    }

    // Draw the bird
    ctx.drawImage(flappyImg, birdX, birdY, BIRD_WIDTH, BIRD_HEIGHT);

    // Request the next frame
    requestAnimationFrame(gameLoop);
}

// Initialize the Flappy Bird game
export function initializeFlappyBirdGame(containerId: string) {
    // Clear the game container before creating a new canvas
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = "";
    }

    // Use the utility function to ensure only one canvas is created
    canvas = getOrCreateCanvas(containerId, "game-canvas", 800, 400);
    ctx = canvas.getContext("2d");

    flappyImg = new Image();
    flappyImg.src = "assets/flappy_dunk.png";

    // Event listener for bird flap
    function flap() {
        birdVelocity = FLAP_SPEED;
    }

    document.body.onkeyup = (e) => {
        if (e.code === "Space") flap();
    };

    document.body.onclick = flap;

    // Start the game loop when the image is loaded
    flappyImg.onload = gameLoop;
}
