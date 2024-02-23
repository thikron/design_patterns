import {CoffeeOrder} from "../Flyweight_Interface/coffeeOrder";
import {CoffeeOrderContext} from "../Context/coffeeOrderContext";

export class CoffeeFlavor implements CoffeeOrder {
    private flavor: string;

    constructor(flavor: string) {
        this.flavor = flavor;
    }

    serveCoffee(context: CoffeeOrderContext): void {
        console.log(`Serving coffee flavor '${this.flavor}' to table #${context.getTable()}`);
    }
}