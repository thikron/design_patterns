import {Visitor} from "../Visitor_Interface/visitor";
import {Element} from "../Element_Interface/element";

export class ConcreteElementB implements Element {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }

    operationB(): void {
        console.log("Operation B performed on ConcreteElementB");
    }
}