import {CoffeeFlavor} from "../Concrete_Flyweight/coffeeFlavor";

export class CoffeeFlavorFactory {
    private flavors: { [key: string]: CoffeeFlavor } = {};

    getCoffeeFlavor(flavorName: string): CoffeeFlavor {
        if (!this.flavors[flavorName]) {
            this.flavors[flavorName] = new CoffeeFlavor(flavorName);
        }
        return this.flavors[flavorName];
    }

    getTotalCoffeeFlavorsMade(): number {
        return Object.keys(this.flavors).length;
    }
}