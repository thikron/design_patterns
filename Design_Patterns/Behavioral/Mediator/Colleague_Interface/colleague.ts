export interface Colleague {
    send(message: string): void;

    receive(message: string): void;
}