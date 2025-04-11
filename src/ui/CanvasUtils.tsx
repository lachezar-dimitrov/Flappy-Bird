import React, { useEffect, useRef } from "react";

type CanvasProps = {
    width?: number;
    height?: number;
    id?: string;
};

export const Canvas: React.FC<CanvasProps> = ({ width = 800, height = 400, id }) => {
    return (
        <canvas
            id={id}
            width={width}
            height={height}
            className="border-4 border-[#2e2e2e] rounded-lg block mx-auto my-6 shadow-md bg-[url('/assets/Flappy_Bird_Background.png')] bg-contain bg-repeat-round z-[1]"
        ></canvas>
    );
};

type ClearContainerProps = {
    containerId: string;
    children?: React.ReactNode;
};

export const ClearContainer: React.FC<ClearContainerProps> = ({ containerId, children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        }
    }, [containerId]);

    return (
        <div id={containerId} ref={containerRef}>
            {children}
        </div>
    );
};
