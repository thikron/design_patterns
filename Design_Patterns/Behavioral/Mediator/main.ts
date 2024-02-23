import {Mediator} from "./Mediator_Interface/mediator";
import {ConcreteMediator} from "./Concrete_Mediator/concreteMediator";
import {Colleague} from "./Colleague_Interface/colleague";
import {ConcreteColleague} from "./Concrete_Colleague/concreteColleague";

const mediator: Mediator = new ConcreteMediator();

const colleague1: Colleague = new ConcreteColleague(mediator);
const colleague2: Colleague = new ConcreteColleague(mediator);
const colleague3: Colleague = new ConcreteColleague(mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

colleague1.send("Hello from colleague 1!"); // Output: Sending message: Hello from colleague 1!
//         Received message: Hello from colleague 1! (by colleague2)
//         Received message: Hello from colleague 1! (by colleague3)
