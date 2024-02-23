import {Internet} from "./Subject_Interface/internet";
import {InternetProxy} from "./Proxy/internetProxy";

const internetProxy: Internet = new InternetProxy();

internetProxy.connectTo("google.com");      // Output: Connecting to google.com
internetProxy.connectTo("facebook.com");    // Output: Access to facebook.com denied!
internetProxy.connectTo("twitter.com");     // Output: Access to twitter.com denied!
internetProxy.connectTo("example.com");     // Output: Connecting to example.com
