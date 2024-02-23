import {Originator} from "./Originator/originator";
import {Caretaker} from "./caretaker";

const originator: Originator = new Originator();
const caretaker: Caretaker = new Caretaker();

originator.setState("State_Interface 1");
originator.setState("State_Interface 2");

caretaker.addMemento(originator.saveStateToMemento());

originator.setState("State_Interface 3");

caretaker.addMemento(originator.saveStateToMemento());

originator.setState("State_Interface 4");

console.log("Current State_Interface:", originator.getState()); // Output: Current State_Interface: State_Interface 4

originator.getStateFromMemento(caretaker.getMemento(0));
console.log("First saved state:", originator.getState()); // Output: First saved state: State_Interface 2

originator.getStateFromMemento(caretaker.getMemento(1));
console.log("Second saved state:", originator.getState()); // Output: Second saved state: State_Interface 3
