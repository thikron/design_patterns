import {Aggregate} from "../Aggregate_Interface/aggregate";
import {Iterator} from "../Iterator_Interface/iterator";
import {CollectionIterator} from "../Concrete_Interator/collectionIterator";

export class Collection implements Aggregate {
    private items: any[] = [];

    addItem(item: any): void {
        this.items.push(item);
    }

    createIterator(): Iterator {
        return new CollectionIterator(this);
    }

    getItems(): any[] {
        return this.items;
    }
}