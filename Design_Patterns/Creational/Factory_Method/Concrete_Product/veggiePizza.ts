import {Pizza} from "../Product/pizza";

export class VeggiePizza implements Pizza {
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