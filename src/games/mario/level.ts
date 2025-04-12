import { Images } from "@/app/mario/page";

export interface Coin {
    x: number;
    y: number;
}

export interface LevelData {
    coins: Coin[];
}

function getRandomValues(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function renderLevel(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    scrollOffset: number,
    levelData: LevelData,
    images: Images,
): void {
    const {
        ground: groundImage,
        coin: coinImage,
        mario: marioImage,
        mushroom: mushroomImage,
        tree: treeImage,
        background: backgroundImage,
    } = images;

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw parallax scrolling background
    const aspectRatio = backgroundImage.width / backgroundImage.height;
    const targetHeight = canvas.width / aspectRatio;
    const bgOffset = scrollOffset % canvas.width;

    ctx.drawImage(backgroundImage, -bgOffset, 0, canvas.width, targetHeight);
    ctx.drawImage(backgroundImage, canvas.width - bgOffset, 0, canvas.width, targetHeight);

    // Draw ground tiles
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.drawImage(groundImage, x - bgOffset, canvas.height - 60, 100, 80);
    }

    // Draw coins
    for (const coin of levelData.coins) {
        ctx.drawImage(coinImage, coin.x - scrollOffset, coin.y, 100, 100); // Increased size to 40x40
    }

    ctx.drawImage(mushroomImage, 180 - scrollOffset, canvas.height - 100, 80, 80);
    ctx.drawImage(mushroomImage, 480 - scrollOffset, canvas.height - 100, 80, 80);
    ctx.drawImage(mushroomImage, 1520 - scrollOffset, canvas.height - 100, 80, 80);

    // Draw static assets
    ctx.drawImage(treeImage, 500 - scrollOffset, canvas.height - 370, 320, 400);
}
