import {Context} from "./Context/context";
import {Expression} from "./Abstract_Expression/expression";
import {AdditionExpression} from "./Nonterminal_Expression/additionExpression";
import {VariableExpression} from "./Terminal_Expression/variableExpression";
import {SubtractionExpression} from "./Nonterminal_Expression/subtractionExpression";
import {NumberExpression} from "./Terminal_Expression/numberExpression";

const context: Context = new Context();
context.setVariable("x", 10);
context.setVariable("y", 5);

const expression: Expression = new AdditionExpression(
    new VariableExpression("x"),
    new SubtractionExpression(
        new NumberExpression(20),
        new VariableExpression("y")
    )
);

console.log("Result:", expression.interpret(context)); // Output: Result: 25
