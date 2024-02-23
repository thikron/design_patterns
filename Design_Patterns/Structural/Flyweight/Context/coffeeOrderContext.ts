export class CoffeeOrderContext {
    private tableNumber: number;

    constructor(tableNumber: number) {
        this.tableNumber = tableNumber;
    }

    getTable(): number {
        return this.tableNumber;
    }
}