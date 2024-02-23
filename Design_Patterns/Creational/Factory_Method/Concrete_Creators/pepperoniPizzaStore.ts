// Concrete Creator
import {PizzaStore} from "../Creator/pizzaStore";
import {Pizza} from "../Product/pizza";
import {PepperoniPizza} from "../Concrete_Product/pepperoniPizza";

export class PepperoniPizzaStore extends PizzaStore {
    createPizza(): Pizza {
        return new PepperoniPizza();
    }
}