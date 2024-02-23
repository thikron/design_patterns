import {Colleague} from "../Colleague_Interface/colleague";
import {Mediator} from "../Mediator_Interface/mediator";

export class ConcreteColleague implements Colleague {
    private mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    send(message: string): void {
        console.log(`Sending message: ${message}`);
        this.mediator.sendMessage(this, message);
    }

    receive(message: string): void {
        console.log(`Received message: ${message}`);
    }
}