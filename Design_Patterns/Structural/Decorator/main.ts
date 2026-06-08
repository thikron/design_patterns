import {Coffee} from "./Component_Interface/coffee";
import {SimpleCoffee} from "./Concrete_Component/simpleCoffee";
import {MilkDecorator} from "./Decorator/milkDecorator";
import {SugarDecorator} from "./Decorator/sugarDecorator";

console.log('Step by step decoration');
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());

coffee = new MilkDecorator(coffee);
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());

coffee = new SugarDecorator(coffee);
console.log(coffee.getDescription(), "- Cost:", coffee.getCost());

console.log('All in one line decoration')
const latteMachiato = new MilkDecorator(new SugarDecorator(new SimpleCoffee()));
console.log(latteMachiato.getDescription(), "- Cost:", latteMachiato.getCost());
