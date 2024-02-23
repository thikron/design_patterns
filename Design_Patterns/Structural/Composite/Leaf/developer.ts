import {Employee} from "../Component/employee";

export class Developer implements Employee {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    print(): void {
        console.log(`Developer: ${this.name}, Salary: ${this.salary}`);
    }
}