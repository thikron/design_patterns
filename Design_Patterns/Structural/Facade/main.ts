import {ComputerFacade} from "./Facade/computerFacade";

const computerFacade: ComputerFacade = new ComputerFacade();

computerFacade.startComputer();
console.log("Computer is running...");
console.log("Performing some tasks...");
console.log("Tasks completed.");
computerFacade.shutdownComputer();
