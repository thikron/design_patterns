import { Iterator } from '../Iterator_Interface/iterator';
export interface Aggregate {
    createIterator(): Iterator;

    addItem(item1: string): void;
}