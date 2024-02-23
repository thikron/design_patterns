import {State} from "../State_Interface/state";
import {Context} from "../Context/context";
import {ConcreteStateA} from "./concreteStateA";

export class ConcreteStateB implements State {
    handleRequest(context: Context): void {
        console.log("Handling request in State_Interface B");
        context.setState(new ConcreteStateA());
    }
}