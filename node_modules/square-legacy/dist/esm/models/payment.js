import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { addressSchema } from './address';
import { applicationDetailsSchema, } from './applicationDetails';
import { bankAccountPaymentDetailsSchema, } from './bankAccountPaymentDetails';
import { buyNowPayLaterDetailsSchema, } from './buyNowPayLaterDetails';
import { cardPaymentDetailsSchema, } from './cardPaymentDetails';
import { cashPaymentDetailsSchema, } from './cashPaymentDetails';
import { deviceDetailsSchema } from './deviceDetails';
import { digitalWalletDetailsSchema, } from './digitalWalletDetails';
import { externalPaymentDetailsSchema, } from './externalPaymentDetails';
import { moneySchema } from './money';
import { offlinePaymentDetailsSchema, } from './offlinePaymentDetails';
import { processingFeeSchema } from './processingFee';
import { riskEvaluationSchema } from './riskEvaluation';
import { squareAccountDetailsSchema, } from './squareAccountDetails';
export const paymentSchema = object({
    id: ['id', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    tipMoney: ['tip_money', optional(lazy(() => moneySchema))],
    totalMoney: ['total_money', optional(lazy(() => moneySchema))],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    approvedMoney: ['approved_money', optional(lazy(() => moneySchema))],
    processingFee: [
        'processing_fee',
        optional(array(lazy(() => processingFeeSchema))),
    ],
    refundedMoney: ['refunded_money', optional(lazy(() => moneySchema))],
    status: ['status', optional(string())],
    delayDuration: ['delay_duration', optional(string())],
    delayAction: ['delay_action', optional(nullable(string()))],
    delayedUntil: ['delayed_until', optional(string())],
    sourceType: ['source_type', optional(string())],
    cardDetails: ['card_details', optional(lazy(() => cardPaymentDetailsSchema))],
    cashDetails: ['cash_details', optional(lazy(() => cashPaymentDetailsSchema))],
    bankAccountDetails: [
        'bank_account_details',
        optional(lazy(() => bankAccountPaymentDetailsSchema)),
    ],
    externalDetails: [
        'external_details',
        optional(lazy(() => externalPaymentDetailsSchema)),
    ],
    walletDetails: [
        'wallet_details',
        optional(lazy(() => digitalWalletDetailsSchema)),
    ],
    buyNowPayLaterDetails: [
        'buy_now_pay_later_details',
        optional(lazy(() => buyNowPayLaterDetailsSchema)),
    ],
    squareAccountDetails: [
        'square_account_details',
        optional(lazy(() => squareAccountDetailsSchema)),
    ],
    locationId: ['location_id', optional(string())],
    orderId: ['order_id', optional(string())],
    referenceId: ['reference_id', optional(string())],
    customerId: ['customer_id', optional(string())],
    employeeId: ['employee_id', optional(string())],
    teamMemberId: ['team_member_id', optional(nullable(string()))],
    refundIds: ['refund_ids', optional(array(string()))],
    riskEvaluation: [
        'risk_evaluation',
        optional(lazy(() => riskEvaluationSchema)),
    ],
    terminalCheckoutId: ['terminal_checkout_id', optional(string())],
    buyerEmailAddress: ['buyer_email_address', optional(string())],
    billingAddress: ['billing_address', optional(lazy(() => addressSchema))],
    shippingAddress: ['shipping_address', optional(lazy(() => addressSchema))],
    note: ['note', optional(string())],
    statementDescriptionIdentifier: [
        'statement_description_identifier',
        optional(string()),
    ],
    capabilities: ['capabilities', optional(array(string()))],
    receiptNumber: ['receipt_number', optional(string())],
    receiptUrl: ['receipt_url', optional(string())],
    deviceDetails: ['device_details', optional(lazy(() => deviceDetailsSchema))],
    applicationDetails: [
        'application_details',
        optional(lazy(() => applicationDetailsSchema)),
    ],
    isOfflinePayment: ['is_offline_payment', optional(boolean())],
    offlinePaymentDetails: [
        'offline_payment_details',
        optional(lazy(() => offlinePaymentDetailsSchema)),
    ],
    versionToken: ['version_token', optional(nullable(string()))],
});
//# sourceMappingURL=payment.js.map