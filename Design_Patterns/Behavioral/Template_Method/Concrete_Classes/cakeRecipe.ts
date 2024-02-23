import {Recipe} from "../Abstract_Class/recipe";

export class CakeRecipe extends Recipe {
    prepareIngredients(): void {
        console.log("Prepare flour, sugar, eggs, butter, and baking powder.");
    }

    mixIngredients(): void {
        console.log("Mix all ingredients together to form a batter.");
    }

    cookInOven(): void {
        console.log("Bake in the oven at 180°C for 30 minutes.");
    }

    // Overriding default serve method
    serve(): void {
        console.log("Serve the cake with icing or frosting.");
    }
}