import {PizzaBuilder} from "../Builder/pizzaBuilder";
import {Pizza} from "../Product/pizza";

export class PizzaMaker {
    private builder: PizzaBuilder;

    constructor(builder: PizzaBuilder) {
        this.builder = builder;
    }

    makePizza(): Pizza {
        this.builder.setDough();
        this.builder.setSauce();
        this.builder.setTopping();
        return this.builder.getPizza();
    }
}