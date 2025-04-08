import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
import { paymentBalanceActivityAppFeeRefundDetailSchema, } from './paymentBalanceActivityAppFeeRefundDetail';
import { paymentBalanceActivityAppFeeRevenueDetailSchema, } from './paymentBalanceActivityAppFeeRevenueDetail';
import { paymentBalanceActivityAutomaticSavingsDetailSchema, } from './paymentBalanceActivityAutomaticSavingsDetail';
import { paymentBalanceActivityAutomaticSavingsReversedDetailSchema, } from './paymentBalanceActivityAutomaticSavingsReversedDetail';
import { paymentBalanceActivityChargeDetailSchema, } from './paymentBalanceActivityChargeDetail';
import { paymentBalanceActivityDepositFeeDetailSchema, } from './paymentBalanceActivityDepositFeeDetail';
import { paymentBalanceActivityDepositFeeReversedDetailSchema, } from './paymentBalanceActivityDepositFeeReversedDetail';
import { paymentBalanceActivityDisputeDetailSchema, } from './paymentBalanceActivityDisputeDetail';
import { paymentBalanceActivityFeeDetailSchema, } from './paymentBalanceActivityFeeDetail';
import { paymentBalanceActivityFreeProcessingDetailSchema, } from './paymentBalanceActivityFreeProcessingDetail';
import { paymentBalanceActivityHoldAdjustmentDetailSchema, } from './paymentBalanceActivityHoldAdjustmentDetail';
import { paymentBalanceActivityOpenDisputeDetailSchema, } from './paymentBalanceActivityOpenDisputeDetail';
import { paymentBalanceActivityOtherAdjustmentDetailSchema, } from './paymentBalanceActivityOtherAdjustmentDetail';
import { paymentBalanceActivityOtherDetailSchema, } from './paymentBalanceActivityOtherDetail';
import { paymentBalanceActivityRefundDetailSchema, } from './paymentBalanceActivityRefundDetail';
import { paymentBalanceActivityReleaseAdjustmentDetailSchema, } from './paymentBalanceActivityReleaseAdjustmentDetail';
import { paymentBalanceActivityReserveHoldDetailSchema, } from './paymentBalanceActivityReserveHoldDetail';
import { paymentBalanceActivityReserveReleaseDetailSchema, } from './paymentBalanceActivityReserveReleaseDetail';
import { paymentBalanceActivitySquareCapitalPaymentDetailSchema, } from './paymentBalanceActivitySquareCapitalPaymentDetail';
import { paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema, } from './paymentBalanceActivitySquareCapitalReversedPaymentDetail';
import { paymentBalanceActivitySquarePayrollTransferDetailSchema, } from './paymentBalanceActivitySquarePayrollTransferDetail';
import { paymentBalanceActivitySquarePayrollTransferReversedDetailSchema, } from './paymentBalanceActivitySquarePayrollTransferReversedDetail';
import { paymentBalanceActivityTaxOnFeeDetailSchema, } from './paymentBalanceActivityTaxOnFeeDetail';
import { paymentBalanceActivityThirdPartyFeeDetailSchema, } from './paymentBalanceActivityThirdPartyFeeDetail';
import { paymentBalanceActivityThirdPartyFeeRefundDetailSchema, } from './paymentBalanceActivityThirdPartyFeeRefundDetail';
export const payoutEntrySchema = object({
    id: ['id', string()],
    payoutId: ['payout_id', string()],
    effectiveAt: ['effective_at', optional(nullable(string()))],
    type: ['type', optional(string())],
    grossAmountMoney: ['gross_amount_money', optional(lazy(() => moneySchema))],
    feeAmountMoney: ['fee_amount_money', optional(lazy(() => moneySchema))],
    netAmountMoney: ['net_amount_money', optional(lazy(() => moneySchema))],
    typeAppFeeRevenueDetails: [
        'type_app_fee_revenue_details',
        optional(lazy(() => paymentBalanceActivityAppFeeRevenueDetailSchema)),
    ],
    typeAppFeeRefundDetails: [
        'type_app_fee_refund_details',
        optional(lazy(() => paymentBalanceActivityAppFeeRefundDetailSchema)),
    ],
    typeAutomaticSavingsDetails: [
        'type_automatic_savings_details',
        optional(lazy(() => paymentBalanceActivityAutomaticSavingsDetailSchema)),
    ],
    typeAutomaticSavingsReversedDetails: [
        'type_automatic_savings_reversed_details',
        optional(lazy(() => paymentBalanceActivityAutomaticSavingsReversedDetailSchema)),
    ],
    typeChargeDetails: [
        'type_charge_details',
        optional(lazy(() => paymentBalanceActivityChargeDetailSchema)),
    ],
    typeDepositFeeDetails: [
        'type_deposit_fee_details',
        optional(lazy(() => paymentBalanceActivityDepositFeeDetailSchema)),
    ],
    typeDepositFeeReversedDetails: [
        'type_deposit_fee_reversed_details',
        optional(lazy(() => paymentBalanceActivityDepositFeeReversedDetailSchema)),
    ],
    typeDisputeDetails: [
        'type_dispute_details',
        optional(lazy(() => paymentBalanceActivityDisputeDetailSchema)),
    ],
    typeFeeDetails: [
        'type_fee_details',
        optional(lazy(() => paymentBalanceActivityFeeDetailSchema)),
    ],
    typeFreeProcessingDetails: [
        'type_free_processing_details',
        optional(lazy(() => paymentBalanceActivityFreeProcessingDetailSchema)),
    ],
    typeHoldAdjustmentDetails: [
        'type_hold_adjustment_details',
        optional(lazy(() => paymentBalanceActivityHoldAdjustmentDetailSchema)),
    ],
    typeOpenDisputeDetails: [
        'type_open_dispute_details',
        optional(lazy(() => paymentBalanceActivityOpenDisputeDetailSchema)),
    ],
    typeOtherDetails: [
        'type_other_details',
        optional(lazy(() => paymentBalanceActivityOtherDetailSchema)),
    ],
    typeOtherAdjustmentDetails: [
        'type_other_adjustment_details',
        optional(lazy(() => paymentBalanceActivityOtherAdjustmentDetailSchema)),
    ],
    typeRefundDetails: [
        'type_refund_details',
        optional(lazy(() => paymentBalanceActivityRefundDetailSchema)),
    ],
    typeReleaseAdjustmentDetails: [
        'type_release_adjustment_details',
        optional(lazy(() => paymentBalanceActivityReleaseAdjustmentDetailSchema)),
    ],
    typeReserveHoldDetails: [
        'type_reserve_hold_details',
        optional(lazy(() => paymentBalanceActivityReserveHoldDetailSchema)),
    ],
    typeReserveReleaseDetails: [
        'type_reserve_release_details',
        optional(lazy(() => paymentBalanceActivityReserveReleaseDetailSchema)),
    ],
    typeSquareCapitalPaymentDetails: [
        'type_square_capital_payment_details',
        optional(lazy(() => paymentBalanceActivitySquareCapitalPaymentDetailSchema)),
    ],
    typeSquareCapitalReversedPaymentDetails: [
        'type_square_capital_reversed_payment_details',
        optional(lazy(() => paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema)),
    ],
    typeTaxOnFeeDetails: [
        'type_tax_on_fee_details',
        optional(lazy(() => paymentBalanceActivityTaxOnFeeDetailSchema)),
    ],
    typeThirdPartyFeeDetails: [
        'type_third_party_fee_details',
        optional(lazy(() => paymentBalanceActivityThirdPartyFeeDetailSchema)),
    ],
    typeThirdPartyFeeRefundDetails: [
        'type_third_party_fee_refund_details',
        optional(lazy(() => paymentBalanceActivityThirdPartyFeeRefundDetailSchema)),
    ],
    typeSquarePayrollTransferDetails: [
        'type_square_payroll_transfer_details',
        optional(lazy(() => paymentBalanceActivitySquarePayrollTransferDetailSchema)),
    ],
    typeSquarePayrollTransferReversedDetails: [
        'type_square_payroll_transfer_reversed_details',
        optional(lazy(() => paymentBalanceActivitySquarePayrollTransferReversedDetailSchema)),
    ],
});
//# sourceMappingURL=payoutEntry.js.map