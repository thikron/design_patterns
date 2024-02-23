import {PepperoniPizzaBuilder} from "./Concrete_Builder/pepperoniPizzaBuilder";
import {Pizza} from "./Product/pizza";
import {PizzaBuilder} from "./Builder/pizzaBuilder";
import {PizzaMaker} from "./Director/pizzaMaker";

const pepperoniBuilder: PizzaBuilder = new PepperoniPizzaBuilder();
const pizzaMaker: PizzaMaker = new PizzaMaker(pepperoniBuilder);
const pepperoniPizza: Pizza = pizzaMaker.makePizza();

pepperoniPizza.describe();
