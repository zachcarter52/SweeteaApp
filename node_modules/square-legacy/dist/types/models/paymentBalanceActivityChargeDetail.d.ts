import { Schema } from '../schema';
export interface PaymentBalanceActivityChargeDetail {
    /** The ID of the payment associated with this activity. */
    paymentId?: string | null;
}
export declare const paymentBalanceActivityChargeDetailSchema: Schema<PaymentBalanceActivityChargeDetail>;
