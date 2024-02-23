// Concrete Element 1
import {ConcreteElementA} from "./Concrete Elements/concreteElementA";
import {ConcreteElementB} from "./Concrete Elements/concreteElementB";
import {ConcreteVisitor} from "./Concrete_Visitor/concreteVisitor";
import {ObjectStructure} from "./Object_Structure/objectStructure";

// Usage
const objectStructure = new ObjectStructure();
objectStructure.addElement(new ConcreteElementA());
objectStructure.addElement(new ConcreteElementB());

const visitor = new ConcreteVisitor();
objectStructure.accept(visitor);
