// Concrete Prototype
import {PizzaPrototype} from "../Prototype/pizzaPrototype";

export class VeggiePizza implements PizzaPrototype {
    clone(): PizzaPrototype {
        return new VeggiePizza();
    }

    prepare(): void {
        console.log("Preparing Veggie Pizza");
    }

    bake(): void {
        console.log("Baking Veggie Pizza");
    }

    cut(): void {
        console.log("Cutting Veggie Pizza");
    }

    box(): void {
        console.log("Boxing Veggie Pizza");
    }
}