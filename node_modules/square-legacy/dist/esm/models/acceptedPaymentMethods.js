import { boolean, nullable, object, optional } from '../schema';
export const acceptedPaymentMethodsSchema = object({
    applePay: ['apple_pay', optional(nullable(boolean()))],
    googlePay: ['google_pay', optional(nullable(boolean()))],
    cashAppPay: ['cash_app_pay', optional(nullable(boolean()))],
    afterpayClearpay: ['afterpay_clearpay', optional(nullable(boolean()))],
});
//# sourceMappingURL=acceptedPaymentMethods.js.map