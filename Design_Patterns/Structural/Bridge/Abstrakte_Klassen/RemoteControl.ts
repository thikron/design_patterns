// Abstrakte Klasse für die Fernbedienung
import {Device} from "./Device";

export abstract class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    abstract powerOn(): void;
    abstract powerOff(): void;
    abstract volumeUp(): void;
    abstract volumeDown(): void;
}