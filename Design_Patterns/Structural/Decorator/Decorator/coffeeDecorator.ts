import {Coffee} from "../Component_Interface/coffee";

export abstract class CoffeeDecorator implements Coffee {
    protected decoratedCoffee: Coffee;

    constructor(decoratedCoffee: Coffee) {
        this.decoratedCoffee = decoratedCoffee;
    }

    getCost(): number {
        return this.decoratedCoffee.getCost();
    }

    getDescription(): string {
        return this.decoratedCoffee.getDescription();
    }
}