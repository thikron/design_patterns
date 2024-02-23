import {Aggregate} from "./Aggregate_Interface/aggregate";
import {Collection} from "./Concrete_Aggregate/collection";
import {Iterator} from "./Iterator_Interface/iterator";

const collection: Aggregate = new Collection();

collection.addItem("Item 1");
collection.addItem("Item 2");
collection.addItem("Item 3");

const iterator: Iterator = collection.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next()); // Output: Item 1, Item 2, Item 3
}
