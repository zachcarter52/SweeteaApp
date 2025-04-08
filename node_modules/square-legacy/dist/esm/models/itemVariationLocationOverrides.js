import { bigint, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { moneySchema } from './money';
export const itemVariationLocationOverridesSchema = object({
    locationId: ['location_id', optional(nullable(string()))],
    priceMoney: ['price_money', optional(lazy(() => moneySchema))],
    pricingType: ['pricing_type', optional(string())],
    trackInventory: ['track_inventory', optional(nullable(boolean()))],
    inventoryAlertType: ['inventory_alert_type', optional(string())],
    inventoryAlertThreshold: [
        'inventory_alert_threshold',
        optional(nullable(bigint())),
    ],
    soldOut: ['sold_out', optional(boolean())],
    soldOutValidUntil: ['sold_out_valid_until', optional(string())],
});
//# sourceMappingURL=itemVariationLocationOverrides.js.map