import {CoffeeDecorator} from "./coffeeDecorator";
import {Coffee} from "../Component_Interface/coffee";

export class SugarDecorator extends CoffeeDecorator {
    constructor(decoratedCoffee: Coffee) {
        super(decoratedCoffee);
    }

    getCost(): number {
        return super.getCost() + 2;
    }

    getDescription(): string {
        return super.getDescription() + ", with sugar";
    }
}