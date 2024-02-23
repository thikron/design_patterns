// Abstrakte Klasse für das Gerät
export abstract class Device {
    abstract powerOn(): void;
    abstract powerOff(): void;
    abstract setVolume(volume: number): void;
}