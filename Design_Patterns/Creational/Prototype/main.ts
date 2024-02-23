import {PizzaStore} from "./Client/pizzaStore";
import {PizzaPrototype} from "./Prototype/pizzaPrototype";
import {PepperoniPizza} from "./Concrete_Prototype/pepperoniPizza";
import {VeggiePizza} from "./Concrete_Prototype/veggiePizza";

const pizzaStore: PizzaStore = new PizzaStore();

const pepperoniPrototype: PizzaPrototype = new PepperoniPizza();
const veggiePrototype: PizzaPrototype = new VeggiePizza();

pizzaStore.addPrototype("Pepperoni", pepperoniPrototype);
pizzaStore.addPrototype("Veggie", veggiePrototype);

const pepperoniPizza: PizzaPrototype = pizzaStore.orderPizza("Pepperoni");
const veggiePizza: PizzaPrototype = pizzaStore.orderPizza("Veggie");
