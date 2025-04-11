export function renderLevel(ctx, canvas, scrollOffset, levelData) {
    // Draw the background (sky)
    ctx.fillStyle = "#87CEEB"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Parallax scrolling background
    const backgroundImage = new Image();
    backgroundImage.src = "assets/mario_background.png"; // Placeholder for retro pixel art background
    ctx.drawImage(backgroundImage, -scrollOffset % canvas.width, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, canvas.width - (scrollOffset % canvas.width), 0, canvas.width, canvas.height);

    // Draw the ground
    ctx.fillStyle = "#654321"; // Brown color for the ground
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Draw coins
    ctx.fillStyle = "gold";
    levelData.coins.forEach((coin) => {
        ctx.beginPath();
        ctx.arc(coin.x - scrollOffset, coin.y, 10, 0, Math.PI * 2);
        ctx.fill();
    });

    // Add some placeholder clouds
    ctx.fillStyle = "#FFFFFF"; // White color for clouds
    ctx.beginPath();
    ctx.arc(100 - scrollOffset * 0.5, 100, 30, 0, Math.PI * 2);
    ctx.arc(130 - scrollOffset * 0.5, 100, 40, 0, Math.PI * 2);
    ctx.arc(160 - scrollOffset * 0.5, 100, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300 - scrollOffset * 0.5, 80, 25, 0, Math.PI * 2);
    ctx.arc(330 - scrollOffset * 0.5, 80, 35, 0, Math.PI * 2);
    ctx.arc(360 - scrollOffset * 0.5, 80, 25, 0, Math.PI * 2);
    ctx.fill();
}
