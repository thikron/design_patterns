import {PurchaseApproval} from "./Handler_Interface/purchaseApproval";
import {Director} from "./Concrete_Handler/director";
import {CEO} from "./CEO";
import {Manager} from "./Concrete_Handler/manager";

const manager: PurchaseApproval = new Manager();
const director: PurchaseApproval = new Director();
const ceo: PurchaseApproval = new CEO();

manager.setNextApproval(director);
director.setNextApproval(ceo);

manager.approve(500);       // Output: Manager approves purchase of 500
manager.approve(2000);      // Output: Manager cannot approve purchase of 2000. Forwarding to Director.
manager.approve(7000);      // Output: Director cannot approve purchase of 7000. Forwarding to CEO.
manager.approve(20000);     // Output: CEO approves purchase of 20000
