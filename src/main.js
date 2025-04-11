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

    document
      .getElementById("flappy-bird")
      .addEventListener("click", () => navigateTo("/flappy-bird"));
    document
      .getElementById("mario")
      .addEventListener("click", () => navigateTo("/mario"));
  },
  "/flappy-bird": () => {
    app.innerHTML = '<h1>Flappy Bird</h1><div id="game-container"></div>';
    loadScript("games/flappy/index.js");
  },
  "/mario": () => {
    app.innerHTML = '<h1>Mario</h1><div id="game-container"></div>';
    loadScript("games/mario/index.js");
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
