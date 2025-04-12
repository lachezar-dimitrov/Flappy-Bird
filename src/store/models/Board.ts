// import { action, computed, observable, makeObservable } from "mobx";
import { NUMBER_OF_ROWS, NUMBER_OF_COLUMNS } from "../constants/DefaultValues";

export default class Board {
    // @observable
    private squares: Array<Array<string>>;

    constructor(squares = Array(NUMBER_OF_ROWS).fill(Array(NUMBER_OF_COLUMNS).fill(""))) {
        // makeObservable(this);

        this.squares = squares;
    }

    // @action.bound
    public setValue(row: number, column: number, value: string): void {
        this.squares[row][column] = value;
    }

    // @computed
    public get allSquares(): Array<Array<string>> {
        return this.squares;
    }

    public getValue(x: number, y: number): string {
        return this.squares[x][y];
    }

    /**
     * Given an array of 9 squares, this function will check for a winner.
     *
     * @returns The symbol of the player that won the game or an empty string
     */
    public calculateWinner(row: number, column: number): string {
        const symbol = this.squares[row][column];
        const symbols = Array(this.squares.length).fill(symbol).join("");

        const hasWinningLine = this.checkRows(symbols);
        const hasWinningColumn = this.checkColumns(symbols);
        const hasWinningDiagonal = this.checkDiagonals(symbols);

        let winnerSymbol = "";

        if (hasWinningLine || hasWinningColumn || hasWinningDiagonal) {
            winnerSymbol = symbol;
        }

        return winnerSymbol;
    }

    private checkRows(symbols: string): boolean {
        let hasWinningLine = false;

        this.squares.forEach((row) => {
            if (row.join("") === symbols) {
                hasWinningLine = true;
            }
        });

        return hasWinningLine;
    }

    private checkColumns(symbols: string): boolean {
        let hasWinningColumn = false;

        this.squares.forEach((_, columnIndex) => {
            let col = "";

            this.squares.forEach((__, rowIndex) => {
                col += this.squares[rowIndex][columnIndex];
            });

            if (col === symbols) {
                hasWinningColumn = true;
            }
        });

        return hasWinningColumn;
    }

    private checkDiagonals(symbols: string): boolean {
        const middleRow = 1;
        const middleColumn = 1;
        const up = middleRow - 1;
        const down = middleRow + 1;
        const left = middleColumn - 1;
        const right = middleColumn + 1;

        let hasWinningDiagonal = false;

        const middleValue = this.getValue(middleRow, middleColumn);

        const upperLeft = this.getValue(up, left);
        const downRight = this.getValue(down, right);

        const mainDiagonal = [upperLeft, middleValue, downRight];

        if (mainDiagonal.join("") === symbols) {
            hasWinningDiagonal = true;
        }

        const upperRight = this.getValue(up, right);
        const downLeft = this.getValue(down, left);

        const secondaryDiagonal = [upperRight, middleValue, downLeft];

        if (secondaryDiagonal.join("") === symbols) {
            hasWinningDiagonal = true;
        }

        return hasWinningDiagonal;
    }
}
