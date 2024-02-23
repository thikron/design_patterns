import {Employee} from "../Component/employee";

export class Manager implements Employee {
    private name: string;
    private salary: number;
    private subordinates: Employee[];

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
        this.subordinates = [];
    }

    add(subordinate: Employee): void {
        this.subordinates.push(subordinate);
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    print(): void {
        console.log(`Manager: ${this.name}, Salary: ${this.salary}`);
        this.subordinates.forEach(subordinate => subordinate.print());
    }
}