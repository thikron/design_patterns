import {State} from "../State_Interface/state";
import {Context} from "../Context/context";
import {ConcreteStateB} from "./concreteStateB";

export class ConcreteStateA implements State {
    handleRequest(context: Context): void {
        console.log("Handling request in State_Interface A");
        context.setState(new ConcreteStateB());
    }
}