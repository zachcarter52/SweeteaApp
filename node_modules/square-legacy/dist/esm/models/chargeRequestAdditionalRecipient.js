import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const chargeRequestAdditionalRecipientSchema = object({
    locationId: ['location_id', string()],
    description: ['description', string()],
    amountMoney: ['amount_money', lazy(() => moneySchema)],
});
//# sourceMappingURL=chargeRequestAdditionalRecipient.js.map