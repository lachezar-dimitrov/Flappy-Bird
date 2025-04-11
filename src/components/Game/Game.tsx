"use client";

import AppStore from "@/store/AppStore";
import { RULES } from "../../constants/texts";
import Board from "../../containers/Game/Board/Board";
import Player from "../../store/models/Player";

export interface GameProps {
    draws: number;
    status: string;
    players: Array<Player>;
    //TODO Remove later
    store: AppStore;
}

export default function Game({ draws, status, players, store }: GameProps) {
    const board = store.board;

    const renderHistory = (): React.ReactNode => {
        const renderWins = (player: Player): React.ReactNode => (
            <div data-test={`wins-${player.symbol.toLowerCase()}`}>
                {`Wins ${player.symbol}: ${player.history.wins}`}
            </div>
        );

        return (
            <div
                data-test="history"
                className="grid grid-rows-[2fr_4fr] gap-5 items-center w-full p-7 text-text-1 rounded-2xl border-6 border-text-1 shadow-lg"
            >
                <div data-test="status" className="text-2xl">
                    {status}
                </div>
                <div className="grid grid-cols-3 font-semibold text-lg">
                    {renderWins(players[0])}
                    {renderWins(players[1])}
                    <div data-test="draws">{`Draws: ${draws}`}</div>
                </div>
            </div>
        );
    };

    return (
        <div className="grid grid-cols-[2fr_4fr] grid-areas-[info_board] gap-y-10 h-game-height w-game-width items-center rounded-lg transform translate-x-1/2 translate-y-1/2">
            <div
                data-test="game-info"
                className="grid-area-[info] w-full text-xl p-7 text-text-1 rounded-2xl border-6 border-text-1 shadow-lg"
            >
                {RULES}
            </div>
            {renderHistory()}
            <Board board={board} store={store} />
        </div>
    );
}
