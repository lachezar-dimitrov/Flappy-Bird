// Utility function to create and set the source of an image
export function createImage(src: string): HTMLImageElement {
    const img = new Image();
    img.src = src;
    return img;
}
