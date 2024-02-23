import {Device} from "../Abstrakte_Klassen/Device";

// Konkrete Implementierung für ein TV-Gerät
export class TV extends Device {
    powerOn(): void {
        console.log("TV ist eingeschaltet");
    }

    powerOff(): void {
        console.log("TV ist ausgeschaltet");
    }

    setVolume(volume: number): void {
        console.log(`Lautstärke des TVs auf ${volume} gesetzt`);
    }
}
