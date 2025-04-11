// Utility function to remove all child elements from a container
export function clearContainer(containerId) {
    const container = document.getElementById(containerId);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
