import {Visitor} from "../Visitor_Interface/visitor";

export interface Element {
    accept(visitor: Visitor): void;
}