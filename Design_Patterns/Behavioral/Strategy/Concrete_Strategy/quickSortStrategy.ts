import {Strategy} from "../Strategy_Interface/strategy";

export class QuickSortStrategy implements Strategy {
    executeStrategy(data: number[]): number[] {
        console.log("Using Quick Sort strategy");
        return this.quickSort(data.slice());
    }

    private quickSort(arr: number[]): number[] {
        if (arr.length <= 1) {
            return arr;
        }

        const pivot = arr[arr.length - 1];
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return [...this.quickSort(left), pivot, ...this.quickSort(right)];
    }
}