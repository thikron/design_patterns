import {PurchaseApproval} from "./Handler_Interface/purchaseApproval";

export class CEO implements PurchaseApproval {
    setNextApproval(approval: PurchaseApproval): void {
        // CEO is the final authority, no next approval needed
    }

    approve(amount: number): void {
        console.log(`CEO approves purchase of ${amount}`);
    }
}