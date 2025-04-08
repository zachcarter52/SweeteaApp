import { nullable, number, object, optional, string } from '../schema';
export const v1MoneySchema = object({
    amount: ['amount', optional(nullable(number()))],
    currencyCode: ['currency_code', optional(string())],
});
//# sourceMappingURL=v1Money.js.map