export class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Private constructor to prevent instantiation from outside
    }

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    someBusinessLogic() {
        // Some business logic here
    }
}