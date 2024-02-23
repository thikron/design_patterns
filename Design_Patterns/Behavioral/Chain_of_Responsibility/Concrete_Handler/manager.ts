import {PurchaseApproval} from "../Handler_Interface/purchaseApproval";

export class Manager implements PurchaseApproval {
    private nextApproval: PurchaseApproval | null = null;

    setNextApproval(approval: PurchaseApproval): void {
        this.nextApproval = approval;
    }

    approve(amount: number): void {
        if (amount <= 1000) {
            console.log(`Manager approves purchase of ${amount}`);
        } else if (this.nextApproval) {
            console.log(`Manager cannot approve purchase of ${amount}. Forwarding to Director.`);
            this.nextApproval.approve(amount);
        } else {
            console.log(`Manager cannot approve purchase of ${amount}. No higher authority available.`);
        }
    }
}