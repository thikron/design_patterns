import {Pizza} from "../Product/pizza";

export interface PizzaBuilder {
    setDough(): void;

    setSauce(): void;

    setTopping(): void;

    getPizza(): Pizza;
}