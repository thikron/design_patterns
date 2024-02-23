import {PizzaBuilder} from "../Builder/pizzaBuilder";
import {Pizza} from "../Product/pizza";

export class PepperoniPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    setDough(): void {
        this.pizza.setDough("Thick crust dough");
    }

    setSauce(): void {
        this.pizza.setSauce("Tomato sauce");
    }

    setTopping(): void {
        this.pizza.setTopping("Pepperoni");
    }

    getPizza(): Pizza {
        return this.pizza;
    }
}