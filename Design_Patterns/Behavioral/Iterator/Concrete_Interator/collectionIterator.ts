import { Iterator } from "../Iterator_Interface/iterator";
import {Collection} from "../Concrete_Aggregate/collection";
export class CollectionIterator implements Iterator {
    private collection: Collection;
    private index: number = 0;

    constructor(collection: Collection) {
        this.collection = collection;
    }

    hasNext(): boolean {
        return this.index < this.collection.getItems().length;
    }

    next(): any {
        return this.collection.getItems()[this.index++];
    }
}