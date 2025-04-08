import { array, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const giftCardSchema = object({
    id: ['id', optional(string())],
    type: ['type', string()],
    ganSource: ['gan_source', optional(string())],
    state: ['state', optional(string())],
    balanceMoney: ['balance_money', optional(lazy(() => moneySchema))],
    gan: ['gan', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    customerIds: ['customer_ids', optional(array(string()))],
});
//# sourceMappingURL=giftCard.js.map