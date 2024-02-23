import {AbstractPizzaFactory} from "../Abstract_Factory/abstractPizzaFactory";

export class PizzaStore {
    private factory: AbstractPizzaFactory;

    constructor(factory: AbstractPizzaFactory) {
        this.factory = factory;
    }

    orderPizza(): void {
        const dough = this.factory.createDough();
        const sauce = this.factory.createSauce();
        const topping = this.factory.createTopping();

        console.log("Making pizza with:");
        console.log("Dough:", dough);
        console.log("Sauce:", sauce);
        console.log("Topping:", topping);
    }
}