import {Employee} from "./Component/employee";
import {Developer} from "./Leaf/developer";
import {Manager} from "./Composite/manager";

const dev1: Employee = new Developer("John", 5000);
const dev2: Employee = new Developer("Alice", 5500);
const dev3: Employee = new Developer("Bob", 4800);

const manager1: Manager = new Manager("Mike", 8000);
manager1.add(dev1);
manager1.add(dev2);

const manager2: Manager = new Manager("Emma", 9000);
manager2.add(dev3);

const company: Manager = new Manager("CEO", 20000);
company.add(manager1);
company.add(manager2);

company.print();
