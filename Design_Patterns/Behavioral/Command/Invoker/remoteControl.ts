import {Command} from "../Command_Interface/command";

export class RemoteControl {
    private commands: Command[] = [];

    pressButton(command: Command): void {
        this.commands.push(command);
        command.execute();
    }

    pressUndoButton(): void {
        if (this.commands.length > 0) {
            const lastCommand = this.commands.pop();
            lastCommand?.undo();
        } else {
            console.log("No commands to undo");
        }
    }
}