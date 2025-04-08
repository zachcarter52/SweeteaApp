import { Schema } from '../schema';
export interface PaymentBalanceActivityDepositFeeDetail {
    /** The ID of the payout that triggered this deposit fee activity. */
    payoutId?: string | null;
}
export declare const paymentBalanceActivityDepositFeeDetailSchema: Schema<PaymentBalanceActivityDepositFeeDetail>;
