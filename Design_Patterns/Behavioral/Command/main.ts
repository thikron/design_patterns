import {RemoteControl} from "./Invoker/remoteControl";
import {Light} from "./Receiver/light";
import {Command} from "./Command_Interface/command";
import {TurnOnCommand} from "./Concrete_Command/turnOnCommand";
import {TurnOffCommand} from "./Concrete_Command/turnOffCommand";

// Usage
const light: Light = new Light();
const remoteControl: RemoteControl = new RemoteControl();

const turnOnCommand: Command = new TurnOnCommand(light);
const turnOffCommand: Command = new TurnOffCommand(light);

remoteControl.pressButton(turnOnCommand);   // Output: Light is on
remoteControl.pressButton(turnOffCommand);  // Output: Light is off
remoteControl.pressUndoButton();            // Output: Light is on (undoing last command)
