import {RemoteControl} from "../Abstrakte_Klassen/RemoteControl";

// Konkrete Implementierung für eine Standardfernbedienung
export class StandardRemoteControl extends RemoteControl {
    powerOn(): void {
        console.log("Standardfernbedienung: Einschalten");
        this.device.powerOn();
    }

    powerOff(): void {
        console.log("Standardfernbedienung: Ausschalten");
        this.device.powerOff();
    }

    volumeUp(): void {
        console.log("Standardfernbedienung: Lautstärke erhöhen");
        this.device.setVolume(10);
    }

    volumeDown(): void {
        console.log("Standardfernbedienung: Lautstärke verringern");
        this.device.setVolume(5);
    }
}