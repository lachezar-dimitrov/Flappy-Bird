import React, { useEffect, useRef } from "react";

type CanvasProps = {
    width?: number;
    height?: number;
    id?: string;
};

export const Canvas: React.FC<CanvasProps> = ({ width = 800, height = 400, id }) => {
    return <canvas id={id} width={width} height={height}></canvas>;
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

    return <div id={containerId} ref={containerRef}>{children}</div>;
};
