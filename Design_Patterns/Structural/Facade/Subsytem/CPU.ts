export class CPU {
    start(): void {
        console.log("CPU is starting...");
    }

    execute(instruction: string): void {
        console.log(`CPU is executing instruction: ${instruction}`);
    }

    stop(): void {
        console.log("CPU is stopping...");
    }
}