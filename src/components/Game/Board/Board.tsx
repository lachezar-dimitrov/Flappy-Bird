"use client";

import React, { Component, Fragment, ReactNode } from "react";
// import { observer } from "mobx-react";
import Box from "../../../containers/Game/Board/Box/Box";
import BoardModel from "../../../store/models/Board";
import AppStore from "@/store/AppStore";

export interface BoardProps {
    board: BoardModel;
    //TODO Remove later
    store: AppStore;
}

export default function Board(props: BoardProps) {
    const { board, store } = props;

    return (
        <div data-test="board" className="grid grid-cols-3 grid-rows-3 gap-1.5 m-5 h-board-height w-board-height">
            {board?.allSquares.map((row, rowIndex) => (
                <Fragment key={rowIndex}>
                    {row.map((box, columnIndex) => (
                        <Box
                            value={box}
                            row={rowIndex}
                            column={columnIndex}
                            key={columnIndex}
                            winnerSymbol={store.winnerSymbol}
                            players={store.players}
                            currentPlayerIndex={store.currentPlayerIndex}
                            handleBoxClick={store.handleBoxClick}
                        />
                    ))}
                </Fragment>
            ))}
        </div>
    );
}
