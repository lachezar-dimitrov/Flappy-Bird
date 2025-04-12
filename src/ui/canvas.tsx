"use client";

import { FC, ReactNode, useEffect, useRef } from "react";

export const canvasDimensions = {
    width: 1600,
    height: 800,
} as const;

type CanvasProps = {
    width?: number;
    height?: number;
    id?: string;
};

export const Canvas: FC<CanvasProps> = ({ width = canvasDimensions.width, height = canvasDimensions.height, id }) => {
    return <canvas id={id} width={width} height={height} className="block mx-auto my-6 shadow-md"></canvas>;
};

type ClearContainerProps = {
    containerId: string;
    children?: ReactNode;
};

export const ClearContainer: FC<ClearContainerProps> = ({ containerId, children }) => {
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
