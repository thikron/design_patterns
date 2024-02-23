import {Visitor} from "../Visitor_Interface/visitor";
import {Element} from "../Element_Interface/element";

export class ConcreteElementA implements Element {
    accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }

    operationA(): void {
        console.log("Operation A performed on ConcreteElementA");
    }
}