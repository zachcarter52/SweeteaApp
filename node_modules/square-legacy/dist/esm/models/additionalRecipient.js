import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const additionalRecipientSchema = object({
    locationId: ['location_id', string()],
    description: ['description', optional(nullable(string()))],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
    receivableId: ['receivable_id', optional(nullable(string()))],
});
//# sourceMappingURL=additionalRecipient.js.map