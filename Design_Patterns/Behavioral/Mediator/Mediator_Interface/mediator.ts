import {Colleague} from "../Colleague_Interface/colleague";

export interface Mediator {
    sendMessage(sender: Colleague, message: string): void;

    addColleague(colleague1: Colleague): void;
}