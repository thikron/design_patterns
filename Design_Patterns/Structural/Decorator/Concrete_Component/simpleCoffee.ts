import {Coffee} from "../Component_Interface/coffee";

export class SimpleCoffee implements Coffee {
    getCost(): number {
        return 10;
    }

    getDescription(): string {
        return "Simple coffee";
    }
}