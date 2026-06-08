import {ComputerFacade} from "./Facade/computerFacade";

const computerFacade: ComputerFacade = new ComputerFacade();

computerFacade.startComputer();
console.log("Computer is running...");
console.log("Performing some tasks...");
computerFacade.checkHardDrive();
computerFacade.checkMemory();
console.log("Tasks completed.");
computerFacade.shutdownComputer();
