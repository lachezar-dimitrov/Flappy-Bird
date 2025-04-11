import { gameLoop } from "./game.js";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 400;
    document.getElementById("game-container").appendChild(canvas);

    const ctx = canvas.getContext("2d");

    // Pass canvas and context to the game loop
    gameLoop(ctx, canvas);
});
