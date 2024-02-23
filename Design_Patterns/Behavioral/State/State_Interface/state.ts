import {Context} from "../Context/context";

export interface State {
    handleRequest(context: Context): void;
}