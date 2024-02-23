import {PizzaPrototype} from "../Prototype/pizzaPrototype";

export class PepperoniPizza implements PizzaPrototype {
    clone(): PizzaPrototype {
        return new PepperoniPizza();
    }

    prepare(): void {
        console.log("Preparing Pepperoni Pizza");
    }

    bake(): void {
        console.log("Baking Pepperoni Pizza");
    }

    cut(): void {
        console.log("Cutting Pepperoni Pizza");
    }

    box(): void {
        console.log("Boxing Pepperoni Pizza");
    }
}