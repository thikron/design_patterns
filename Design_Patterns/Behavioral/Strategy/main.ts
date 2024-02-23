import {BubbleSortStrategy} from "./Concrete_Strategy/bubbleSortStrategy";
import {QuickSortStrategy} from "./Concrete_Strategy/quickSortStrategy";
import {Context} from "./Context/context";

const data = [4, 2, 7, 1, 9, 5];
const bubbleSortStrategy = new BubbleSortStrategy();
const quickSortStrategy = new QuickSortStrategy();

const context = new Context(bubbleSortStrategy);
console.log("Sorted using Bubble Sort:", context.executeStrategy(data));

context.setStrategy(quickSortStrategy);
console.log("Sorted using Quick Sort:", context.executeStrategy(data));
