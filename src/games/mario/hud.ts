export function renderHUD(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    coinsCollected: number,
    score: number,
    lives: number,
    startTime: number,
): void {
    ctx.fillStyle = "#000";
    ctx.font = "16px Arial";
    ctx.fillText(`Coins: ${coinsCollected}`, 10, 20);
    ctx.fillText(`Score: ${score}`, 10, 40);
    ctx.fillText(`Lives: ${lives}`, 10, 60);

    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    ctx.fillText(`Time: ${elapsedTime}s`, canvas.width - 100, 20);
}
