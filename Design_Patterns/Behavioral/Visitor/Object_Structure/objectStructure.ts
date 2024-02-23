import {Visitor} from "../Visitor_Interface/visitor";
import {Element} from "../Element_Interface/element";

export class ObjectStructure {
    private elements: Element[] = [];

    addElement(element: Element): void {
        this.elements.push(element);
    }

    accept(visitor: Visitor): void {
        this.elements.forEach(element => {
            element.accept(visitor);
        });
    }
}