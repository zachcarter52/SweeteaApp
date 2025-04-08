import { lazy, nullable, object, optional, string } from '../schema';
import { moneySchema } from './money';
export const orderLineItemAppliedServiceChargeSchema = object({
    uid: ['uid', optional(nullable(string()))],
    serviceChargeUid: ['service_charge_uid', string()],
    appliedMoney: ['applied_money', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=orderLineItemAppliedServiceCharge.js.map