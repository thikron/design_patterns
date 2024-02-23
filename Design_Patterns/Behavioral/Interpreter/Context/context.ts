export class Context {
    private variables: Map<string, number>;

    constructor() {
        this.variables = new Map();
    }

    setVariable(name: string, value: number): void {
        this.variables.set(name, value);
    }

    getVariable(name: string): number {
        if (this.variables.has(name)) {
            return this.variables.get(name)!;
        }
        throw new Error(`Variable '${name}' not found.`);
    }
}