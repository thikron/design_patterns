export interface PurchaseApproval {
    setNextApproval(approval: PurchaseApproval): void;

    approve(amount: number): void;
}