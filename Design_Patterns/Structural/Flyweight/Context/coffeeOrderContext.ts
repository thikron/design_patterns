export class CoffeeOrderContext {
    private readonly tableNumber: number;

    constructor(tableNumber: number) {
        this.tableNumber = tableNumber;
    }

    getTable(): number {
        return this.tableNumber;
    }
}