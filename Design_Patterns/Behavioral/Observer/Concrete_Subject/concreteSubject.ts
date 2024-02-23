import {Subject} from "../Subject/subject";
import {Observer} from "../Observer/observer";

export class ConcreteSubject implements Subject {
    private state: number = 0;
    private observers: Observer[] = [];

    getState(): number {
        return this.state;
    }

    setState(state: number): void {
        this.state = state;
        this.notify();
    }

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(): void {
        this.observers.forEach(observer => {
            observer.update();
        });
    }
}