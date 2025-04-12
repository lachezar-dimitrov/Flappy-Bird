// import { action, observable, makeObservable, computed } from "mobx";
import {
    INITIAL_TURNS,
    INITIAL_DRAWS,
    maxNumberOfTurns,
    INITIAL_PLAYER_INDEX,
    INITIAL_WINNER_SYMBOL,
    DEFAULT_PLAYER_ONE_SIGN,
    DEFAULT_PLAYER_TWO_SIGN,
} from "./constants/DefaultValues";
import Board from "./models/Board";
import Player from "./models/Player";
import History from "./models/History";
import { DRAW_MESSAGE, NEXT_PLAYER, WINNER_MESSAGE } from "../constants/texts";

export default class AppStore {
    // // @observable
    turns: number;
    // @observable
    draws: number;
    // @observable
    winnerSymbol: string;
    // @observable
    currentPlayerIndex: number;

    // @observable
    board: Board;
    // @observable
    history: History;
    // @observable
    players: Array<Player>;

    constructor(
        board = new Board(),
        history = new History(),
        players = [new Player(DEFAULT_PLAYER_ONE_SIGN), new Player(DEFAULT_PLAYER_TWO_SIGN)],
    ) {
        // makeObservable(this);

        this.board = board;
        this.history = history;
        this.players = players;

        this.turns = INITIAL_TURNS;
        this.draws = INITIAL_DRAWS;
        this.winnerSymbol = INITIAL_WINNER_SYMBOL;
        this.currentPlayerIndex = INITIAL_PLAYER_INDEX;
    }

    // @computed
    get status(): string {
        const { draws, players, winnerSymbol, currentPlayerIndex } = this;

        if (winnerSymbol) {
            return `${WINNER_MESSAGE} ${winnerSymbol}`;
        }
        if (draws) {
            // TODO Should not check the number of draws if 'new game button is added
            return DRAW_MESSAGE;
        }
        return `${NEXT_PLAYER}: ${players[currentPlayerIndex].symbol}`;
    }

    // @action.bound
    handleBoxClick(row: number, column: number, value: string): void {
        if (!this.winnerSymbol && !this.board.getValue(row, column)) {
            this.turns += 1;

            this.board.setValue(row, column, value);

            this.winnerSymbol = this.board.calculateWinner(row, column);

            if (this.winnerSymbol) {
                this.players.forEach((player) => {
                    if (player.symbol === this.winnerSymbol) {
                        player.history.wins += 1;
                    } else {
                        player.history.loses += 1;
                    }
                });
            } else if (this.turns === maxNumberOfTurns) {
                this.draws += 1;
            } else {
                this.currentPlayerIndex = this.turns % this.players.length;
            }

            // if (this.winnerSymbol) {
            //   this.players.forEach((player) => {
            //     if (player.symbol === this.winnerSymbol) {
            //       player.history.wins += 1;
            //     } else {
            //       player.history.loses += 1;
            //     }
            //   });
            // } else if (this.turns === maxNumberOfTurns) {
            //   this.draws += 1;

            //   this.players.forEach((player) => {
            //     if (player.symbol === this.winnerSymbol) {
            //       player.history.wins += 1;
            //     } else {
            //       player.history.loses += 1;
            //     }
            //   });
            //   // maybe you should push in the history a current
            //   // Status with everything happening in the game
            // } else {
            //   this.currentPlayerIndex = this.turns % this.players.length;
            // }
        }
    }
}
