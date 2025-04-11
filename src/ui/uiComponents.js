// Utility function to create a button element
export function createButton(text, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onClick);
    return button;
}

// Utility function to create a container element
export function createContainer(children = [], id = "") {
    const container = document.createElement("div");
    if (id) container.id = id;
    children.forEach((child) => container.appendChild(child));
    return container;
}

// Utility function to create a heading element
export function createHeading(text, level = 1) {
    const heading = document.createElement(`h${level}`);
    heading.textContent = text;
    return heading;
}
