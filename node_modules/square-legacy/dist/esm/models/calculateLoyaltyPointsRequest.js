import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const calculateLoyaltyPointsRequestSchema = object({
    orderId: ['order_id', optional(nullable(string()))],
    transactionAmountMoney: [
        'transaction_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    loyaltyAccountId: ['loyalty_account_id', optional(nullable(string()))],
});
//# sourceMappingURL=calculateLoyaltyPointsRequest.js.map