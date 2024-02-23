export interface PizzaPrototype {
    clone(): PizzaPrototype;

    prepare(): void;

    bake(): void;

    cut(): void;

    box(): void;
}