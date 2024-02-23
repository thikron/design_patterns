import {Observer} from "./Observer/observer";
import {ConcreteSubject} from "./Concrete_Subject/concreteSubject";
import {ConcreteObserver} from "./Concrete_Observer/concreteObserver";

// Usage
const subject: ConcreteSubject = new ConcreteSubject();

const observer1: Observer = new ConcreteObserver(subject);
const observer2: Observer = new ConcreteObserver(subject);

subject.attach(observer1);
subject.attach(observer2);

subject.setState(5);
subject.setState(10);

subject.detach(observer1);

subject.setState(15);
