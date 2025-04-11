import { createButton, createContainer, createHeading } from "./ui/uiComponents.js";
import { clearContainer, createCanvas } from "./ui/canvasUtils.js";

// Cache DOM elements
const app = document.getElementById("app");

// Routes configuration
const routes = {
    "/": () => {
        clearContainer("app");
        const heading = createHeading("Welcome to the Game Menu", 1);
        const flappyBirdButton = createButton("Play Flappy Bird", () => navigateTo("/flappy-bird"));
        const marioButton = createButton("Play Mario", () => navigateTo("/mario"));

        const container = createContainer([heading, flappyBirdButton, marioButton]);
        app.appendChild(container);
    },
    "/flappy-bird": () => {
        clearContainer("app");
        const heading = createHeading("Flappy Bird", 1);
        const gameContainer = createContainer([], "game-container");

        app.appendChild(heading);
        app.appendChild(gameContainer);

        // Initialize the Flappy Bird game
        initializeFlappyBirdGame("game-container");
    },
    "/mario": () => {
        clearContainer("app");
        const heading = createHeading("Mario", 1);
        const gameContainer = createContainer([], "game-container");

        app.appendChild(heading);
        app.appendChild(gameContainer);

        const canvas = createCanvas(800, 400);
        gameContainer.appendChild(canvas);

        const ctx = canvas.getContext("2d");

        // Load and start the Mario game
        import("./games/mario/game.js").then((module) => {
            module.gameLoop(ctx, canvas);
        });
    },
    "/game-over": () => {
        clearContainer("app");
        const heading = createHeading("Game Over", 1);
        const scoreDisplay = createHeading(`Your final score: ${score}`, 2);
        const restartButton = createButton("Restart", () => navigateTo("/mario"));

        const container = createContainer([heading, scoreDisplay, restartButton]);
        app.appendChild(container);
    },
    "/level-complete": () => {
        clearContainer("app");
        const heading = createHeading("Level Complete!", 1);
        const scoreDisplay = createHeading(`Your score: ${score}`, 2);
        const nextLevelButton = createButton("Next Level", () => navigateTo("/mario")); // Placeholder for next level

        const container = createContainer([heading, scoreDisplay, nextLevelButton]);
        app.appendChild(container);
    },
};

// Navigation function
function navigateTo(path) {
    window.history.pushState({}, path, window.location.origin + path);
    renderRoute(path);
}

// Route rendering function
function renderRoute(path) {
    const route = routes[path] || routes["/"];
    route();
}

// Handle browser navigation
window.onpopstate = () => renderRoute(window.location.pathname);

// Initial render
renderRoute(window.location.pathname);
