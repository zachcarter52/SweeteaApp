import { Schema } from '../schema';
export interface PaymentBalanceActivityTaxOnFeeDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
    /** The description of the tax rate being applied. For example: "GST", "HST". */
    taxRateDescription?: string | null;
}
export declare const paymentBalanceActivityTaxOnFeeDetailSchema: Schema<PaymentBalanceActivityTaxOnFeeDetail>;
