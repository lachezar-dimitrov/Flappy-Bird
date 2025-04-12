// import { makeObservable, observable } from "mobx";
import History from "./History";

export default class Player {
    // @observable
    public symbol: string;
    // @observable
    public history: History;

    constructor(symbol: string, history = new History()) {
        // makeObservable(this);

        this.symbol = symbol;
        this.history = history;
    }
}
