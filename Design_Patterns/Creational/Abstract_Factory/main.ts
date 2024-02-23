import {AbstractPizzaFactory} from "./Abstract_Factory/abstractPizzaFactory";
import {PepperoniPizzaFactory} from "./Concrete_Factory/pepperoniPizzaFactory";
import {VeggiePizzaFactory} from "./Concrete_Factory/veggiePizzaFactory";
import {PizzaStore} from "./Client/pizzaStore";

const pepperoniFactory: AbstractPizzaFactory = new PepperoniPizzaFactory();
const veggieFactory: AbstractPizzaFactory = new VeggiePizzaFactory();

const pepperoniPizzaStore: PizzaStore = new PizzaStore(pepperoniFactory);
pepperoniPizzaStore.orderPizza();

const veggiePizzaStore: PizzaStore = new PizzaStore(veggieFactory);
veggiePizzaStore.orderPizza();
