// Concrete Creator
import {PizzaStore} from "../Creator/pizzaStore";
import {Pizza} from "../Product/pizza";
import {VeggiePizza} from "../Concrete_Product/veggiePizza";

export class VeggiePizzaStore extends PizzaStore {
    createPizza(): Pizza {
        return new VeggiePizza();
    }
}