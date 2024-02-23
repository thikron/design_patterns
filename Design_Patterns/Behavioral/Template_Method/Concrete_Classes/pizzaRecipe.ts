import {Recipe} from "../Abstract_Class/recipe";

export class PizzaRecipe extends Recipe {
    prepareIngredients(): void {
        console.log("Prepare pizza dough, tomato sauce, cheese, and toppings.");
    }

    mixIngredients(): void {
        console.log("Roll out the dough, spread sauce, sprinkle cheese, add toppings.");
    }

    cookInOven(): void {
        console.log("Bake in the oven at 200°C for 15 minutes.");
    }
}