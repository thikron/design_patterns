import {Pizza} from "../Product/pizza";

export class PepperoniPizza implements Pizza {
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