export interface Coin {
    x: number;
    y: number;
}

export interface LevelData {
    coins: Coin[];
}

export function renderLevel(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    scrollOffset: number,
    levelData: LevelData,
    createImage: (src: string) => HTMLImageElement,
): void {
    const groundImage = createImage("/mario/grass-block.png");
    const coinImage = createImage("/mario/coin.png");
    const marioImage = createImage("/mario/player.png");
    const mushroomImage = createImage("/mario/mushroom.png");
    const treeImage = createImage("/mario/tree.png");
    const backgroundImage = createImage("/mario/background.png");

    // Draw the background (sky)
    ctx.fillStyle = "#87CEEB"; // Sky blue
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Parallax scrolling background
    backgroundImage.onload = () => {
        const aspectRatio = backgroundImage.width / backgroundImage.height;
        const targetHeight = canvas.width / aspectRatio;
        ctx.drawImage(backgroundImage, -scrollOffset % canvas.width, 0, canvas.width, targetHeight);
        ctx.drawImage(backgroundImage, canvas.width - (scrollOffset % canvas.width), 0, canvas.width, targetHeight);
    };

    // Draw the ground using the grass-block image
    groundImage.onload = () => {
        for (let x = 0; x < canvas.width; x += 50) {
            ctx.drawImage(groundImage, x - (scrollOffset % canvas.width), canvas.height - 50, 50, 50);
        }
    };

    // Draw coins using the coin image
    levelData.coins.forEach((coin) => {
        coinImage.onload = () => {
            ctx.drawImage(coinImage, coin.x - scrollOffset, coin.y, 20, 20);
        };
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

    // Draw Mario, Mushroom, and Tree assets
    ctx.drawImage(marioImage, 50, canvas.height - 150, 50, 50);
    ctx.drawImage(mushroomImage, 200 - scrollOffset, canvas.height - 100, 40, 40);
    ctx.drawImage(treeImage, 400 - scrollOffset, canvas.height - 150, 80, 100);
}
