import { array, lazy, nullable, number, object, optional, string, } from '../schema';
import { destinationSchema } from './destination';
import { moneySchema } from './money';
import { payoutFeeSchema } from './payoutFee';
export const payoutSchema = object({
    id: ['id', string()],
    status: ['status', optional(string())],
    locationId: ['location_id', string()],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    amountMoney: ['amount_money', optional(lazy(() => moneySchema))],
    destination: ['destination', optional(lazy(() => destinationSchema))],
    version: ['version', optional(number())],
    type: ['type', optional(string())],
    payoutFee: [
        'payout_fee',
        optional(nullable(array(lazy(() => payoutFeeSchema)))),
    ],
    arrivalDate: ['arrival_date', optional(nullable(string()))],
    endToEndId: ['end_to_end_id', optional(nullable(string()))],
});
//# sourceMappingURL=payout.js.map