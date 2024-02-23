import {PurchaseApproval} from "../Handler_Interface/purchaseApproval";

export class Director implements PurchaseApproval {
    private nextApproval: PurchaseApproval | null = null;

    setNextApproval(approval: PurchaseApproval): void {
        this.nextApproval = approval;
    }

    approve(amount: number): void {
        if (amount <= 5000) {
            console.log(`Director approves purchase of ${amount}`);
        } else if (this.nextApproval) {
            console.log(`Director cannot approve purchase of ${amount}. Forwarding to CEO.`);
            this.nextApproval.approve(amount);
        } else {
            console.log(`Director cannot approve purchase of ${amount}. No higher authority available.`);
        }
    }
}