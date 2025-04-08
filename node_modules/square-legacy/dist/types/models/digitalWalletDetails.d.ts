import { Schema } from '../schema';
import { CashAppDetails } from './cashAppDetails';
/** Additional details about `WALLET` type payments. Contains only non-confidential information. */
export interface DigitalWalletDetails {
    /**
     * The status of the `WALLET` payment. The status can be `AUTHORIZED`, `CAPTURED`, `VOIDED`, or
     * `FAILED`.
     */
    status?: string | null;
    /**
     * The brand used for the `WALLET` payment. The brand can be `CASH_APP`, `PAYPAY`, `ALIPAY`,
     * `RAKUTEN_PAY`, `AU_PAY`, `D_BARAI`, `MERPAY`, `WECHAT_PAY` or `UNKNOWN`.
     */
    brand?: string | null;
    /** Additional details about `WALLET` type payments with the `brand` of `CASH_APP`. */
    cashAppDetails?: CashAppDetails;
}
export declare const digitalWalletDetailsSchema: Schema<DigitalWalletDetails>;
