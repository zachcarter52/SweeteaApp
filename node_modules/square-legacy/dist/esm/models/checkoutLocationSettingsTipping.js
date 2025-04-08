import { array, boolean, lazy, nullable, number, object, optional, } from '../schema';
import { moneySchema } from './money';
export const checkoutLocationSettingsTippingSchema = object({
    percentages: ['percentages', optional(nullable(array(number())))],
    smartTippingEnabled: [
        'smart_tipping_enabled',
        optional(nullable(boolean())),
    ],
    defaultPercent: ['default_percent', optional(nullable(number()))],
    smartTips: [
        'smart_tips',
        optional(nullable(array(lazy(() => moneySchema)))),
    ],
    defaultSmartTip: ['default_smart_tip', optional(lazy(() => moneySchema))],
});
//# sourceMappingURL=checkoutLocationSettingsTipping.js.map