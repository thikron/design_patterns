import {Pizza} from "../Product/pizza";

export abstract class PizzaStore {
    abstract createPizza(): Pizza;

    orderPizza(): Pizza {
        const pizza: Pizza = this.createPizza();
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}