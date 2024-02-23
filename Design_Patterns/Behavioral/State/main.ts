import {State} from "./State_Interface/state";
import {ConcreteStateA} from "./Concrete_States/concreteStateA";
import {Context} from "./Context/context";

const initialState: State = new ConcreteStateA();
const context: Context = new Context(initialState);

context.request(); // Output: Handling request in State_Interface A
context.request(); // Output: Handling request in State_Interface B
context.request(); // Output: Handling request in State_Interface A
