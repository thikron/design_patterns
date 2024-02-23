// Client
import {PizzaPrototype} from "../Prototype/pizzaPrototype";

export class PizzaStore {
    private pizzaPrototypes: { [key: string]: PizzaPrototype };

    constructor() {
        this.pizzaPrototypes = {};
    }

    addPrototype(name: string, pizza: PizzaPrototype): void {
        this.pizzaPrototypes[name] = pizza;
    }

    orderPizza(name: string): PizzaPrototype {
        const pizzaPrototype: PizzaPrototype = this.pizzaPrototypes[name];
        if (!pizzaPrototype) {
            throw new Error("Unknown pizza type");
        }

        const clonedPizza: PizzaPrototype = pizzaPrototype.clone();
        clonedPizza.prepare();
        clonedPizza.bake();
        clonedPizza.cut();
        clonedPizza.box();
        return clonedPizza;
    }
}