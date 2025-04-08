import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { acceptedPaymentMethodsSchema, } from './acceptedPaymentMethods';
import { customFieldSchema } from './customField';
import { moneySchema } from './money';
import { shippingFeeSchema } from './shippingFee';
export const checkoutOptionsSchema = object({
    allowTipping: ['allow_tipping', optional(nullable(boolean()))],
    customFields: [
        'custom_fields',
        optional(nullable(array(lazy(() => customFieldSchema)))),
    ],
    subscriptionPlanId: ['subscription_plan_id', optional(nullable(string()))],
    redirectUrl: ['redirect_url', optional(nullable(string()))],
    merchantSupportEmail: [
        'merchant_support_email',
        optional(nullable(string())),
    ],
    askForShippingAddress: [
        'ask_for_shipping_address',
        optional(nullable(boolean())),
    ],
    acceptedPaymentMethods: [
        'accepted_payment_methods',
        optional(lazy(() => acceptedPaymentMethodsSchema)),
    ],
    appFeeMoney: ['app_fee_money', optional(lazy(() => moneySchema))],
    shippingFee: ['shipping_fee', optional(lazy(() => shippingFeeSchema))],
    enableCoupon: ['enable_coupon', optional(nullable(boolean()))],
    enableLoyalty: ['enable_loyalty', optional(nullable(boolean()))],
});
//# sourceMappingURL=checkoutOptions.js.map