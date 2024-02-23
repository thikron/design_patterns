import {Coffee} from "./Component_Interface/coffee";
import {SimpleCoffee} from "./Concrete_Component/simpleCoffee";
import {MilkDecorator} from "./Decorator/milkDecorator";
import {SugarDecorator} from "./Decorator/sugarDecorator";

let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());
