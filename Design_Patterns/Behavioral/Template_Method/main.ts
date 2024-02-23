import {PizzaRecipe} from "./Concrete_Classes/pizzaRecipe";
import {CakeRecipe} from "./Concrete_Classes/cakeRecipe";

const pizzaRecipe = new PizzaRecipe();
console.log("Making Pizza:");
pizzaRecipe.cook();

console.log("\nMaking Cake:");
const cakeRecipe = new CakeRecipe();
cakeRecipe.cook();
