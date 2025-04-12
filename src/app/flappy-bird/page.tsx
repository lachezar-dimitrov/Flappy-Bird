"use client";

import { initializeFlappyBirdGame } from "@/games/flappy";
import React, { useEffect } from "react";

const FlappyBirdGame: React.FC = () => {
    useEffect(() => {
        initializeFlappyBirdGame("flappy-bird-container");
    }, []);

    return <div id="flappy-bird-container" style={{ width: "800px", height: "400px", position: "relative" }}></div>;
};

export default FlappyBirdGame;
