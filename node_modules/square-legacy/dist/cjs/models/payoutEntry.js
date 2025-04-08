"use strict";
exports.__esModule = true;
exports.payoutEntrySchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
var paymentBalanceActivityAppFeeRefundDetail_1 = require("./paymentBalanceActivityAppFeeRefundDetail");
var paymentBalanceActivityAppFeeRevenueDetail_1 = require("./paymentBalanceActivityAppFeeRevenueDetail");
var paymentBalanceActivityAutomaticSavingsDetail_1 = require("./paymentBalanceActivityAutomaticSavingsDetail");
var paymentBalanceActivityAutomaticSavingsReversedDetail_1 = require("./paymentBalanceActivityAutomaticSavingsReversedDetail");
var paymentBalanceActivityChargeDetail_1 = require("./paymentBalanceActivityChargeDetail");
var paymentBalanceActivityDepositFeeDetail_1 = require("./paymentBalanceActivityDepositFeeDetail");
var paymentBalanceActivityDepositFeeReversedDetail_1 = require("./paymentBalanceActivityDepositFeeReversedDetail");
var paymentBalanceActivityDisputeDetail_1 = require("./paymentBalanceActivityDisputeDetail");
var paymentBalanceActivityFeeDetail_1 = require("./paymentBalanceActivityFeeDetail");
var paymentBalanceActivityFreeProcessingDetail_1 = require("./paymentBalanceActivityFreeProcessingDetail");
var paymentBalanceActivityHoldAdjustmentDetail_1 = require("./paymentBalanceActivityHoldAdjustmentDetail");
var paymentBalanceActivityOpenDisputeDetail_1 = require("./paymentBalanceActivityOpenDisputeDetail");
var paymentBalanceActivityOtherAdjustmentDetail_1 = require("./paymentBalanceActivityOtherAdjustmentDetail");
var paymentBalanceActivityOtherDetail_1 = require("./paymentBalanceActivityOtherDetail");
var paymentBalanceActivityRefundDetail_1 = require("./paymentBalanceActivityRefundDetail");
var paymentBalanceActivityReleaseAdjustmentDetail_1 = require("./paymentBalanceActivityReleaseAdjustmentDetail");
var paymentBalanceActivityReserveHoldDetail_1 = require("./paymentBalanceActivityReserveHoldDetail");
var paymentBalanceActivityReserveReleaseDetail_1 = require("./paymentBalanceActivityReserveReleaseDetail");
var paymentBalanceActivitySquareCapitalPaymentDetail_1 = require("./paymentBalanceActivitySquareCapitalPaymentDetail");
var paymentBalanceActivitySquareCapitalReversedPaymentDetail_1 = require("./paymentBalanceActivitySquareCapitalReversedPaymentDetail");
var paymentBalanceActivitySquarePayrollTransferDetail_1 = require("./paymentBalanceActivitySquarePayrollTransferDetail");
var paymentBalanceActivitySquarePayrollTransferReversedDetail_1 = require("./paymentBalanceActivitySquarePayrollTransferReversedDetail");
var paymentBalanceActivityTaxOnFeeDetail_1 = require("./paymentBalanceActivityTaxOnFeeDetail");
var paymentBalanceActivityThirdPartyFeeDetail_1 = require("./paymentBalanceActivityThirdPartyFeeDetail");
var paymentBalanceActivityThirdPartyFeeRefundDetail_1 = require("./paymentBalanceActivityThirdPartyFeeRefundDetail");
exports.payoutEntrySchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.string)()],
    payoutId: ['payout_id', (0, schema_1.string)()],
    effectiveAt: ['effective_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.string)())],
    grossAmountMoney: ['gross_amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    feeAmountMoney: ['fee_amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    netAmountMoney: ['net_amount_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    typeAppFeeRevenueDetails: [
        'type_app_fee_revenue_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityAppFeeRevenueDetail_1.paymentBalanceActivityAppFeeRevenueDetailSchema; })),
    ],
    typeAppFeeRefundDetails: [
        'type_app_fee_refund_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityAppFeeRefundDetail_1.paymentBalanceActivityAppFeeRefundDetailSchema; })),
    ],
    typeAutomaticSavingsDetails: [
        'type_automatic_savings_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityAutomaticSavingsDetail_1.paymentBalanceActivityAutomaticSavingsDetailSchema; })),
    ],
    typeAutomaticSavingsReversedDetails: [
        'type_automatic_savings_reversed_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityAutomaticSavingsReversedDetail_1.paymentBalanceActivityAutomaticSavingsReversedDetailSchema; })),
    ],
    typeChargeDetails: [
        'type_charge_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityChargeDetail_1.paymentBalanceActivityChargeDetailSchema; })),
    ],
    typeDepositFeeDetails: [
        'type_deposit_fee_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityDepositFeeDetail_1.paymentBalanceActivityDepositFeeDetailSchema; })),
    ],
    typeDepositFeeReversedDetails: [
        'type_deposit_fee_reversed_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityDepositFeeReversedDetail_1.paymentBalanceActivityDepositFeeReversedDetailSchema; })),
    ],
    typeDisputeDetails: [
        'type_dispute_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityDisputeDetail_1.paymentBalanceActivityDisputeDetailSchema; })),
    ],
    typeFeeDetails: [
        'type_fee_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityFeeDetail_1.paymentBalanceActivityFeeDetailSchema; })),
    ],
    typeFreeProcessingDetails: [
        'type_free_processing_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityFreeProcessingDetail_1.paymentBalanceActivityFreeProcessingDetailSchema; })),
    ],
    typeHoldAdjustmentDetails: [
        'type_hold_adjustment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityHoldAdjustmentDetail_1.paymentBalanceActivityHoldAdjustmentDetailSchema; })),
    ],
    typeOpenDisputeDetails: [
        'type_open_dispute_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityOpenDisputeDetail_1.paymentBalanceActivityOpenDisputeDetailSchema; })),
    ],
    typeOtherDetails: [
        'type_other_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityOtherDetail_1.paymentBalanceActivityOtherDetailSchema; })),
    ],
    typeOtherAdjustmentDetails: [
        'type_other_adjustment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityOtherAdjustmentDetail_1.paymentBalanceActivityOtherAdjustmentDetailSchema; })),
    ],
    typeRefundDetails: [
        'type_refund_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityRefundDetail_1.paymentBalanceActivityRefundDetailSchema; })),
    ],
    typeReleaseAdjustmentDetails: [
        'type_release_adjustment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityReleaseAdjustmentDetail_1.paymentBalanceActivityReleaseAdjustmentDetailSchema; })),
    ],
    typeReserveHoldDetails: [
        'type_reserve_hold_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityReserveHoldDetail_1.paymentBalanceActivityReserveHoldDetailSchema; })),
    ],
    typeReserveReleaseDetails: [
        'type_reserve_release_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityReserveReleaseDetail_1.paymentBalanceActivityReserveReleaseDetailSchema; })),
    ],
    typeSquareCapitalPaymentDetails: [
        'type_square_capital_payment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivitySquareCapitalPaymentDetail_1.paymentBalanceActivitySquareCapitalPaymentDetailSchema; })),
    ],
    typeSquareCapitalReversedPaymentDetails: [
        'type_square_capital_reversed_payment_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivitySquareCapitalReversedPaymentDetail_1.paymentBalanceActivitySquareCapitalReversedPaymentDetailSchema; })),
    ],
    typeTaxOnFeeDetails: [
        'type_tax_on_fee_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityTaxOnFeeDetail_1.paymentBalanceActivityTaxOnFeeDetailSchema; })),
    ],
    typeThirdPartyFeeDetails: [
        'type_third_party_fee_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityThirdPartyFeeDetail_1.paymentBalanceActivityThirdPartyFeeDetailSchema; })),
    ],
    typeThirdPartyFeeRefundDetails: [
        'type_third_party_fee_refund_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivityThirdPartyFeeRefundDetail_1.paymentBalanceActivityThirdPartyFeeRefundDetailSchema; })),
    ],
    typeSquarePayrollTransferDetails: [
        'type_square_payroll_transfer_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivitySquarePayrollTransferDetail_1.paymentBalanceActivitySquarePayrollTransferDetailSchema; })),
    ],
    typeSquarePayrollTransferReversedDetails: [
        'type_square_payroll_transfer_reversed_details',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return paymentBalanceActivitySquarePayrollTransferReversedDetail_1.paymentBalanceActivitySquarePayrollTransferReversedDetailSchema; })),
    ]
});
//# sourceMappingURL=payoutEntry.js.map