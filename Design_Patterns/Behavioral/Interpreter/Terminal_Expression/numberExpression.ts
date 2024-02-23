import {Expression} from "../Abstract_Expression/expression";
import {Context} from "../Context/context";

export class NumberExpression implements Expression {
    private value: number;

    constructor(value: number) {
        this.value = value;
    }

    interpret(context: Context): number {
        return this.value;
    }
}