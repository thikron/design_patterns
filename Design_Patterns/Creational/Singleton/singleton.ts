export class Singleton {
    private static instance: Singleton;
    public name = '';

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    setInstanceName(name: string) {
        this.name = name;
    }
}