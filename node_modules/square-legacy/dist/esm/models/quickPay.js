import { lazy, object, string } from '../schema';
import { moneySchema } from './money';
export const quickPaySchema = object({
    name: ['name', string()],
    priceMoney: ['price_money', lazy(() => moneySchema)],
    locationId: ['location_id', string()],
});
//# sourceMappingURL=quickPay.js.map