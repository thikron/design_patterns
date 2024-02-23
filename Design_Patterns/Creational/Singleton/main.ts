import {Singleton} from "./singleton";

// Usage
const singleton1: Singleton = Singleton.getInstance();
const singleton2: Singleton = Singleton.getInstance();

console.log(singleton1 === singleton2); // Output: true, because both variables refer to the same instance
