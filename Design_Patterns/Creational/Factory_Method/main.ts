import {Pizza} from "./Product/pizza";
import {PizzaStore} from "./Creator/pizzaStore";
import {PepperoniPizzaStore} from "./Concrete_Creators/pepperoniPizzaStore";
import {VeggiePizzaStore} from "./Concrete_Creators/veggiePizzaStore";

// Usage
const pepperoniStore: PizzaStore = new PepperoniPizzaStore();
const pepperoniPizza: Pizza = pepperoniStore.orderPizza();

const veggieStore: PizzaStore = new VeggiePizzaStore();
const veggiePizza: Pizza = veggieStore.orderPizza();
