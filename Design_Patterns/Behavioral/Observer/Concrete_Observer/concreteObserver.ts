import {Observer} from "../Observer/observer";
import {ConcreteSubject} from "../Concrete_Subject/concreteSubject";

export class ConcreteObserver implements Observer {
    private subject: ConcreteSubject;

    constructor(subject: ConcreteSubject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update(): void {
        console.log(`Observer: Subject's state has changed to ${this.subject.getState()}`);
    }
}