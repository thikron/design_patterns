import {Strategy} from "../Strategy_Interface/strategy";

export class BubbleSortStrategy implements Strategy {
    executeStrategy(data: number[]): number[] {
        console.log("Using Bubble Sort strategy");
        return data.slice().sort((a, b) => a - b);
    }
}