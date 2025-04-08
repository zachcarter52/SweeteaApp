import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const shippingFeeSchema = object({
    name: ['name', optional(nullable(string()))],
    charge: ['charge', lazy(() => moneySchema)],
});
//# sourceMappingURL=shippingFee.js.map