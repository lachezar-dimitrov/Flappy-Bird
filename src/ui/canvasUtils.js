// Utility function to create and configure a canvas element
export function createCanvas(width = 800, height = 400, id = "") {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    if (id) canvas.id = id;
    return canvas;
}
