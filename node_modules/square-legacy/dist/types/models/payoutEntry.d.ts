import { Schema } from '../schema';
import { Money } from './money';
import { PaymentBalanceActivityAppFeeRefundDetail } from './paymentBalanceActivityAppFeeRefundDetail';
import { PaymentBalanceActivityAppFeeRevenueDetail } from './paymentBalanceActivityAppFeeRevenueDetail';
import { PaymentBalanceActivityAutomaticSavingsDetail } from './paymentBalanceActivityAutomaticSavingsDetail';
import { PaymentBalanceActivityAutomaticSavingsReversedDetail } from './paymentBalanceActivityAutomaticSavingsReversedDetail';
import { PaymentBalanceActivityChargeDetail } from './paymentBalanceActivityChargeDetail';
import { PaymentBalanceActivityDepositFeeDetail } from './paymentBalanceActivityDepositFeeDetail';
import { PaymentBalanceActivityDepositFeeReversedDetail } from './paymentBalanceActivityDepositFeeReversedDetail';
import { PaymentBalanceActivityDisputeDetail } from './paymentBalanceActivityDisputeDetail';
import { PaymentBalanceActivityFeeDetail } from './paymentBalanceActivityFeeDetail';
import { PaymentBalanceActivityFreeProcessingDetail } from './paymentBalanceActivityFreeProcessingDetail';
import { PaymentBalanceActivityHoldAdjustmentDetail } from './paymentBalanceActivityHoldAdjustmentDetail';
import { PaymentBalanceActivityOpenDisputeDetail } from './paymentBalanceActivityOpenDisputeDetail';
import { PaymentBalanceActivityOtherAdjustmentDetail } from './paymentBalanceActivityOtherAdjustmentDetail';
import { PaymentBalanceActivityOtherDetail } from './paymentBalanceActivityOtherDetail';
import { PaymentBalanceActivityRefundDetail } from './paymentBalanceActivityRefundDetail';
import { PaymentBalanceActivityReleaseAdjustmentDetail } from './paymentBalanceActivityReleaseAdjustmentDetail';
import { PaymentBalanceActivityReserveHoldDetail } from './paymentBalanceActivityReserveHoldDetail';
import { PaymentBalanceActivityReserveReleaseDetail } from './paymentBalanceActivityReserveReleaseDetail';
import { PaymentBalanceActivitySquareCapitalPaymentDetail } from './paymentBalanceActivitySquareCapitalPaymentDetail';
import { PaymentBalanceActivitySquareCapitalReversedPaymentDetail } from './paymentBalanceActivitySquareCapitalReversedPaymentDetail';
import { PaymentBalanceActivitySquarePayrollTransferDetail } from './paymentBalanceActivitySquarePayrollTransferDetail';
import { PaymentBalanceActivitySquarePayrollTransferReversedDetail } from './paymentBalanceActivitySquarePayrollTransferReversedDetail';
import { PaymentBalanceActivityTaxOnFeeDetail } from './paymentBalanceActivityTaxOnFeeDetail';
import { PaymentBalanceActivityThirdPartyFeeDetail } from './paymentBalanceActivityThirdPartyFeeDetail';
import { PaymentBalanceActivityThirdPartyFeeRefundDetail } from './paymentBalanceActivityThirdPartyFeeRefundDetail';
/**
 * One or more PayoutEntries that make up a Payout. Each one has a date, amount, and type of activity.
 * The total amount of the payout will equal the sum of the payout entries for a batch payout
 */
export interface PayoutEntry {
    /** A unique ID for the payout entry. */
    id: string;
    /** The ID of the payout entries’ associated payout. */
    payoutId: string;
    /** The timestamp of when the payout entry affected the balance, in RFC 3339 format. */
    effectiveAt?: string | null;
    type?: string;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    grossAmountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    feeAmountMoney?: Money;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    netAmountMoney?: Money;
    typeAppFeeRevenueDetails?: PaymentBalanceActivityAppFeeRevenueDetail;
    typeAppFeeRefundDetails?: PaymentBalanceActivityAppFeeRefundDetail;
    typeAutomaticSavingsDetails?: PaymentBalanceActivityAutomaticSavingsDetail;
    typeAutomaticSavingsReversedDetails?: PaymentBalanceActivityAutomaticSavingsReversedDetail;
    typeChargeDetails?: PaymentBalanceActivityChargeDetail;
    typeDepositFeeDetails?: PaymentBalanceActivityDepositFeeDetail;
    typeDepositFeeReversedDetails?: PaymentBalanceActivityDepositFeeReversedDetail;
    typeDisputeDetails?: PaymentBalanceActivityDisputeDetail;
    typeFeeDetails?: PaymentBalanceActivityFeeDetail;
    typeFreeProcessingDetails?: PaymentBalanceActivityFreeProcessingDetail;
    typeHoldAdjustmentDetails?: PaymentBalanceActivityHoldAdjustmentDetail;
    typeOpenDisputeDetails?: PaymentBalanceActivityOpenDisputeDetail;
    typeOtherDetails?: PaymentBalanceActivityOtherDetail;
    typeOtherAdjustmentDetails?: PaymentBalanceActivityOtherAdjustmentDetail;
    typeRefundDetails?: PaymentBalanceActivityRefundDetail;
    typeReleaseAdjustmentDetails?: PaymentBalanceActivityReleaseAdjustmentDetail;
    typeReserveHoldDetails?: PaymentBalanceActivityReserveHoldDetail;
    typeReserveReleaseDetails?: PaymentBalanceActivityReserveReleaseDetail;
    typeSquareCapitalPaymentDetails?: PaymentBalanceActivitySquareCapitalPaymentDetail;
    typeSquareCapitalReversedPaymentDetails?: PaymentBalanceActivitySquareCapitalReversedPaymentDetail;
    typeTaxOnFeeDetails?: PaymentBalanceActivityTaxOnFeeDetail;
    typeThirdPartyFeeDetails?: PaymentBalanceActivityThirdPartyFeeDetail;
    typeThirdPartyFeeRefundDetails?: PaymentBalanceActivityThirdPartyFeeRefundDetail;
    typeSquarePayrollTransferDetails?: PaymentBalanceActivitySquarePayrollTransferDetail;
    typeSquarePayrollTransferReversedDetails?: PaymentBalanceActivitySquarePayrollTransferReversedDetail;
}
export declare const payoutEntrySchema: Schema<PayoutEntry>;
