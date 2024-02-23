export interface AbstractPizzaFactory {
    createDough(): string;

    createSauce(): string;

    createTopping(): string;
}