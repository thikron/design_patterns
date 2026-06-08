import {PizzaStore} from "./Creator/pizzaStore";
import {PepperoniPizzaStore} from "./Concrete_Creators/pepperoniPizzaStore";
import {VeggiePizzaStore} from "./Concrete_Creators/veggiePizzaStore";

// Usage
const pepperoniStore: PizzaStore = new PepperoniPizzaStore();
pepperoniStore.orderPizza();

const veggieStore: PizzaStore = new VeggiePizzaStore();
veggieStore.orderPizza();
