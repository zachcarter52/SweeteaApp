import { bigint, nullable, object, optional, string } from '../schema';
export const moneySchema = object({
    amount: ['amount', optional(nullable(bigint()))],
    currency: ['currency', optional(string())],
});
//# sourceMappingURL=money.js.map