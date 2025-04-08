import { boolean, nullable, object, optional } from '../schema';
export const invoiceAcceptedPaymentMethodsSchema = object({
    card: ['card', optional(nullable(boolean()))],
    squareGiftCard: ['square_gift_card', optional(nullable(boolean()))],
    bankAccount: ['bank_account', optional(nullable(boolean()))],
    buyNowPayLater: ['buy_now_pay_later', optional(nullable(boolean()))],
    cashAppPay: ['cash_app_pay', optional(nullable(boolean()))],
});
//# sourceMappingURL=invoiceAcceptedPaymentMethods.js.map