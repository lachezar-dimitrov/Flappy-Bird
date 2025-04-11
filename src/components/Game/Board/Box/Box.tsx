"use client";

import React from "react";
import classNames from "classnames";
import Player from "@/store/models/Player";

export type HandleBoxClick = (r: number, c: number, v: string) => void;

export interface BoxProps {
    row: number;
    value: string;
    column: number;
    winnerSymbol: string;
    players: Array<Player>;
    currentPlayerIndex: number;
    handleBoxClick: HandleBoxClick;
}

export default function Box(props: BoxProps) {
    const { row, value, column, players, winnerSymbol, currentPlayerIndex, handleBoxClick } = props;

    const boxValue = players[currentPlayerIndex].symbol;

    const handleClick = (): void => handleBoxClick(row, column, boxValue);

    const [xPlayer, oPlayer] = players;
    const { symbol: xSymbol } = xPlayer;
    const { symbol: oSymbol } = oPlayer;

    const classes = classNames(
        "box transition-all duration-300 ease-in-out border-none",
        "w-[calc(60vh/3)] h-[calc(60vh/3)] bg-negative-1 text-[calc((60vh/3)*0.75)] font-bold",
        "rounded-lg shadow-lg",
        {
            "cursor-pointer transform scale-105": !value && !winnerSymbol,
            "hover:bg-positive": !value && !winnerSymbol && currentPlayerIndex % players.length === 1,
            "hover:bg-negative": !value && !winnerSymbol && currentPlayerIndex % players.length === 0,
            "text-positive bg-negative": value === xSymbol,
            "text-negative bg-positive": value === oSymbol,
        },
    );

    return (
        <button type="button" data-test={`box-${row}-${column}`} className={classes} onClick={handleClick}>
            {value}
        </button>
    );
}
