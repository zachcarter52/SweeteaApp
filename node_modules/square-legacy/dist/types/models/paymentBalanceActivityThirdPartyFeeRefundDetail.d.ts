import { Schema } from '../schema';
export interface PaymentBalanceActivityThirdPartyFeeRefundDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The public refund id associated with this activity. */
    refundId?: string | null;
}
export declare const paymentBalanceActivityThirdPartyFeeRefundDetailSchema: Schema<PaymentBalanceActivityThirdPartyFeeRefundDetail>;
