import {Internet} from "../Subject_Interface/internet";
import {RealInternet} from "../Real_Subject/realInternet";

export class InternetProxy implements Internet {
    private realInternet: RealInternet;
    private bannedSites: string[];

    constructor() {
        this.realInternet = new RealInternet();
        this.bannedSites = ["facebook.com", "twitter.com", "instagram.com"];
    }

    connectTo(url: string): void {
        if (this.bannedSites.includes(url)) {
            console.log(`Access to ${url} denied!`);
        } else {
            this.realInternet.connectTo(url);
        }
    }
}