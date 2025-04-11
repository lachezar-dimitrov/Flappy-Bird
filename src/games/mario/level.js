export function renderLevel(ctx, canvas) {
    // Draw the ground
    ctx.fillStyle = "#654321"; // Brown color for the ground
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);

    // Draw the background (sky)
    ctx.fillStyle = "#87CEEB"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height - 50);

    // Add some placeholder clouds
    ctx.fillStyle = "#FFFFFF"; // White color for clouds
    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, Math.PI * 2);
    ctx.arc(130, 100, 40, 0, Math.PI * 2);
    ctx.arc(160, 100, 30, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(300, 80, 25, 0, Math.PI * 2);
    ctx.arc(330, 80, 35, 0, Math.PI * 2);
    ctx.arc(360, 80, 25, 0, Math.PI * 2);
    ctx.fill();
}
