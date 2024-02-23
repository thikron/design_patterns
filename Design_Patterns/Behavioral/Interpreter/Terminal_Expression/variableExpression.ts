import {Expression} from "../Abstract_Expression/expression";
import {Context} from "../Context/context";

export class VariableExpression implements Expression {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    interpret(context: Context): number {
        return context.getVariable(this.name);
    }
}