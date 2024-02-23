import {State} from "../State_Interface/state";

export class Context {
    private state: State;

    constructor(state: State) {
        this.state = state;
    }

    setState(state: State): void {
        this.state = state;
    }

    request(): void {
        this.state.handleRequest(this);
    }
}