import {CPU} from "../Subsytem/CPU";
import {Memory} from "../Subsytem/memory";
import {HardDrive} from "../Subsytem/hardDrive";

export class ComputerFacade {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    startComputer(): void {
        console.log("Starting computer...");
        this.cpu.start();
        this.memory.load();
        this.hardDrive.read();
        console.log("Computer started successfully.");
    }

    shutdownComputer(): void {
        console.log("Shutting down computer...");
        this.cpu.stop();
        this.memory.unload();
        this.hardDrive.write();
        console.log("Computer shutdown successfully.");
    }
}