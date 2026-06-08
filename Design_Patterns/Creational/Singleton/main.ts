import {Singleton} from "./singleton";

// Usage
const singleton1: Singleton = Singleton.getInstance();
const singleton2: Singleton = Singleton.getInstance();

const name1 = 'Singleton 1';
console.log('setting singleton1 name to ', name1)
singleton1.setInstanceName(name1);
console.log('print singleton1 name: ', singleton1.name);

const name2 = 'Singleton 2';
console.log('setting singleton2 name to ', name2)
singleton2.setInstanceName(name2);
console.log('print singleton2 name: ', singleton2.name);
console.log('print singleton1 name: ', singleton1.name);
