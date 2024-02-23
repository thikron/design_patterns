import {CoffeeDecorator} from "./coffeeDecorator";
import {Coffee} from "../Component_Interface/coffee";

export class MilkDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee: Coffee) {
        super(decoratedCoffee);
    }

    getCost(): number {
        return super.getCost() + 5;
    }

    getDescription(): string {
        return super.getDescription() + ", with milk";
    }
}