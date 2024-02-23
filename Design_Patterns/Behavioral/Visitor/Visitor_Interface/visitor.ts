import {ConcreteElementA} from "../Concrete Elements/concreteElementA";
import {ConcreteElementB} from "../Concrete Elements/concreteElementB";

export interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;

    visitConcreteElementB(element: ConcreteElementB): void;
}