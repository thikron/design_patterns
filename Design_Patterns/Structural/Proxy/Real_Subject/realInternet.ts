// Real Subject
import {Internet} from "../Subject_Interface/internet";

export class RealInternet implements Internet {
    connectTo(url: string): void {
        console.log(`Connecting to ${url}`);
    }
}