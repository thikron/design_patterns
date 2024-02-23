export class Pizza {
    private dough = '';
    private sauce?: string;
    private topping?: string;

    constructor() {
    }

    setDough(dough: string): void {
        this.dough = dough;
    }

    setSauce(sauce: string): void {
        this.sauce = sauce;
    }

    setTopping(topping: string): void {
        this.topping = topping;
    }

    describe(): void {
        console.log("Pizza with:");
        console.log("Dough:", this.dough);
        console.log("Sauce:", this.sauce);
        console.log("Topping:", this.topping);
    }
}