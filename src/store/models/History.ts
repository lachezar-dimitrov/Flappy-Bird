// import { makeObservable, observable } from "mobx";

export default class History {
    // @observable
    wins: number;
    // @observable
    loses: number;

    constructor() {
        // makeObservable(this);

        this.wins = 0;
        this.loses = 0;
    }
}
