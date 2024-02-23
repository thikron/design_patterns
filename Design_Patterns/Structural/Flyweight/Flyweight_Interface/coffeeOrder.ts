import {CoffeeOrderContext} from "../Context/coffeeOrderContext";

export interface CoffeeOrder {
    serveCoffee(context: CoffeeOrderContext): void;
}