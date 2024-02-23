import {Mediator} from "../Mediator_Interface/mediator";
import {Colleague} from "../Colleague_Interface/colleague";

export class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    addColleague(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    sendMessage(sender: Colleague, message: string): void {
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    }
}