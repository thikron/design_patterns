import {Device} from "../Abstrakte_Klassen/Device";

// Konkrete Implementierung für einen DVD-Player
export class DVDPlayer extends Device {
    powerOn(): void {
        console.log("DVD-Player ist eingeschaltet");
    }

    powerOff(): void {
        console.log("DVD-Player ist ausgeschaltet");
    }

    setVolume(volume: number): void {
        console.log(`Lautstärke des DVD-Players auf ${volume} gesetzt`);
    }
}