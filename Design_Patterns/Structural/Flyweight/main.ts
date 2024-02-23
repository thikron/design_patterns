import {CoffeeFlavorFactory} from "./Flyweight_Factory/coffeeFlavorFactory";
import {CoffeeFlavor} from "./Concrete_Flyweight/coffeeFlavor";
import {CoffeeOrderContext} from "./Context/coffeeOrderContext";

const coffeeFlavorFactory: CoffeeFlavorFactory = new CoffeeFlavorFactory();

function takeOrder(flavor: string, table: number): void {
    const coffeeFlavor: CoffeeFlavor = coffeeFlavorFactory.getCoffeeFlavor(flavor);
    coffeeFlavor.serveCoffee(new CoffeeOrderContext(table));
}

takeOrder("Cappuccino", 2);
takeOrder("Latte", 1);
takeOrder("Cappuccino", 3);
takeOrder("Espresso", 2);
takeOrder("Latte", 4);

console.log("Total coffee flavors made: ", coffeeFlavorFactory.getTotalCoffeeFlavorsMade());
