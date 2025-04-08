import { array, boolean, lazy, nullable, object, optional, string, } from '../schema';
import { catalogQuickAmountSchema, } from './catalogQuickAmount';
export const catalogQuickAmountsSettingsSchema = object({
    option: ['option', string()],
    eligibleForAutoAmounts: [
        'eligible_for_auto_amounts',
        optional(nullable(boolean())),
    ],
    amounts: [
        'amounts',
        optional(nullable(array(lazy(() => catalogQuickAmountSchema)))),
    ],
});
//# sourceMappingURL=catalogQuickAmountsSettings.js.map