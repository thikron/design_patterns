import {Expression} from "../Abstract_Expression/expression";
import {Context} from "../Context/context";

export class AdditionExpression implements Expression {
    private leftOperand: Expression;
    private rightOperand: Expression;

    constructor(leftOperand: Expression, rightOperand: Expression) {
        this.leftOperand = leftOperand;
        this.rightOperand = rightOperand;
    }

    interpret(context: Context): number {
        return this.leftOperand.interpret(context) + this.rightOperand.interpret(context);
    }
}