import {AbstractPizzaFactory} from "../Abstract_Factory/abstractPizzaFactory";

export class PepperoniPizzaFactory implements AbstractPizzaFactory {
    createDough(): string {
        return "Thick crust dough";
    }

    createSauce(): string {
        return "Tomato sauce";
    }

    createTopping(): string {
        return "Pepperoni";
    }
}