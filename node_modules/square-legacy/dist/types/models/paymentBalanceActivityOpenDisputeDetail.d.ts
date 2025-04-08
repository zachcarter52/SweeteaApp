import { Schema } from '../schema';
export interface PaymentBalanceActivityOpenDisputeDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the dispute associated with this activity. */
    disputeId?: string | null;
}
export declare const paymentBalanceActivityOpenDisputeDetailSchema: Schema<PaymentBalanceActivityOpenDisputeDetail>;
