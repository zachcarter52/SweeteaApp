import { array, lazy, nullable, object, optional, string, } from '../schema';
import { loyaltyPromotionAvailableTimeDataSchema, } from './loyaltyPromotionAvailableTimeData';
import { loyaltyPromotionIncentiveSchema, } from './loyaltyPromotionIncentive';
import { loyaltyPromotionTriggerLimitSchema, } from './loyaltyPromotionTriggerLimit';
import { moneySchema } from './money';
export const loyaltyPromotionSchema = object({
    id: ['id', optional(string())],
    name: ['name', string()],
    incentive: ['incentive', lazy(() => loyaltyPromotionIncentiveSchema)],
    availableTime: [
        'available_time',
        lazy(() => loyaltyPromotionAvailableTimeDataSchema),
    ],
    triggerLimit: [
        'trigger_limit',
        optional(lazy(() => loyaltyPromotionTriggerLimitSchema)),
    ],
    status: ['status', optional(string())],
    createdAt: ['created_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    loyaltyProgramId: ['loyalty_program_id', optional(string())],
    minimumSpendAmountMoney: [
        'minimum_spend_amount_money',
        optional(lazy(() => moneySchema)),
    ],
    qualifyingItemVariationIds: [
        'qualifying_item_variation_ids',
        optional(nullable(array(string()))),
    ],
    qualifyingCategoryIds: [
        'qualifying_category_ids',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=loyaltyPromotion.js.map