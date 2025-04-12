import { Images } from "@/app/mario/page";

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

    // Draw sky background color
    ctx.fillStyle = "#87CEEB";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw parallax scrolling background
    const aspectRatio = backgroundImage.width / backgroundImage.height;
    const targetHeight = canvas.width / aspectRatio;
    const bgOffset = scrollOffset % canvas.width;

    ctx.drawImage(backgroundImage, -bgOffset, 0, canvas.width, targetHeight);
    ctx.drawImage(backgroundImage, canvas.width - bgOffset, 0, canvas.width, targetHeight);

    // Draw ground tiles
    for (let x = 0; x < canvas.width; x += 50) {
        ctx.drawImage(groundImage, x - bgOffset, canvas.height - 50, 50, 50);
    }

    // Draw coins
    for (const coin of levelData.coins) {
        ctx.drawImage(coinImage, coin.x - scrollOffset, coin.y, 20, 20);
    }

    // Draw static assets
    ctx.drawImage(marioImage, 50, canvas.height - 150, 50, 50);
    ctx.drawImage(mushroomImage, 200 - scrollOffset, canvas.height - 100, 40, 40);
    ctx.drawImage(treeImage, 400 - scrollOffset, canvas.height - 150, 80, 100);
}
