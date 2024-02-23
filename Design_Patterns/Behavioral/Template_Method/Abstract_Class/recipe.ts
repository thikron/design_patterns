export abstract class Recipe {
    // Template method
    cook(): void {
        this.prepareIngredients();
        this.mixIngredients();
        this.cookInOven();
        this.serve();
    }

    // Abstract methods to be implemented by subclasses
    abstract prepareIngredients(): void;

    abstract mixIngredients(): void;

    abstract cookInOven(): void;

    // Default implementation
    serve(): void {
        console.log("Serve the dish.");
    }
}