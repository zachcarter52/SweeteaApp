import { Schema } from '../schema';
export interface PaymentBalanceActivityAppFeeRevenueDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The ID of the location of the merchant associated with the payment activity */
    locationId?: string | null;
}
export declare const paymentBalanceActivityAppFeeRevenueDetailSchema: Schema<PaymentBalanceActivityAppFeeRevenueDetail>;
