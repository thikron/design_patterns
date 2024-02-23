import {Context} from "../Context/context";

export interface Expression {
    interpret(context: Context): number;
}