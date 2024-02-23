import {Visitor} from "../Visitor_Interface/visitor";
import {ConcreteElementA} from "../Concrete Elements/concreteElementA";
import {ConcreteElementB} from "../Concrete Elements/concreteElementB";

export class ConcreteVisitor implements Visitor {
    visitConcreteElementA(element: ConcreteElementA): void {
        console.log("Visitor visits ConcreteElementA");
        element.operationA();
    }

    visitConcreteElementB(element: ConcreteElementB): void {
        console.log("Visitor visits ConcreteElementB");
        element.operationB();
    }
}