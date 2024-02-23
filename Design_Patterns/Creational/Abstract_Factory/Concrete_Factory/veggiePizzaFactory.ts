import {AbstractPizzaFactory} from "../Abstract_Factory/abstractPizzaFactory";

export class VeggiePizzaFactory implements AbstractPizzaFactory {
    createDough(): string {
        return "Thin crust dough";
    }

    createSauce(): string {
        return "Pesto sauce";
    }

    createTopping(): string {
        return "Mushrooms, bell peppers, onions";
    }
}