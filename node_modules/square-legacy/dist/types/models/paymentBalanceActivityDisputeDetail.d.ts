import { Schema } from '../schema';
export interface PaymentBalanceActivityDisputeDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the dispute associated with this activity. */
    disputeId?: string | null;
}
export declare const paymentBalanceActivityDisputeDetailSchema: Schema<PaymentBalanceActivityDisputeDetail>;
