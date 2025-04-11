// SPA Routing and Dynamic Content Rendering

// Cache DOM elements
const app = document.getElementById("app");

// Routes configuration
const routes = {
    "/": () => {
        app.innerHTML = `
      <h1>Welcome to the Game Menu</h1>
      <button id="flappy-bird">Play Flappy Bird</button>
      <button id="mario">Play Mario</button>
    `;

        document.getElementById("flappy-bird").addEventListener("click", () => navigateTo("/flappy-bird"));
        document.getElementById("mario").addEventListener("click", () => navigateTo("/mario"));
    },
    "/flappy-bird": () => {
        app.innerHTML = '<h1>Flappy Bird</h1><div id="game-container"></div>';

        // Initialize the Flappy Bird game
        initializeFlappyBirdGame("game-container");
    },
    "/mario": () => {
        app.innerHTML = '<h1>Mario</h1><div id="game-container"></div>';

        // Create and append the canvas for the Mario game
        const canvas = document.createElement("canvas");
        canvas.width = 800;
        canvas.height = 400;
        document.getElementById("game-container").appendChild(canvas);

        const ctx = canvas.getContext("2d");

        // Load and start the Mario game
        import("./games/mario/game.js").then((module) => {
            module.gameLoop(ctx, canvas);
        });
    },
    "/game-over": () => {
        app.innerHTML = `
      <h1>Game Over</h1>
      <p>Your final score: ${score}</p>
      <button id="restart">Restart</button>
    `;

        document.getElementById("restart").addEventListener("click", () => navigateTo("/mario"));
    },
    "/level-complete": () => {
        app.innerHTML = `
      <h1>Level Complete!</h1>
      <p>Your score: ${score}</p>
      <button id="next-level">Next Level</button>
    `;

        document.getElementById("next-level").addEventListener("click", () => navigateTo("/mario")); // Placeholder for next level
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

// Utility to dynamically load scripts
function loadScript(src) {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => console.log(`${src} loaded`);
    document.body.appendChild(script);
}

// Handle browser navigation
window.onpopstate = () => renderRoute(window.location.pathname);

// Initial render
renderRoute(window.location.pathname);
