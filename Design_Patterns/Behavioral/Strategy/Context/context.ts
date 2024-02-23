import {Strategy} from "../Strategy_Interface/strategy";

export class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    executeStrategy(data: number[]): number[] {
        return this.strategy.executeStrategy(data);
    }
}