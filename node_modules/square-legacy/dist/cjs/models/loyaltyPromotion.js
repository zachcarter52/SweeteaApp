"use strict";
exports.__esModule = true;
exports.loyaltyPromotionSchema = void 0;
var schema_1 = require("../schema");
var loyaltyPromotionAvailableTimeData_1 = require("./loyaltyPromotionAvailableTimeData");
var loyaltyPromotionIncentive_1 = require("./loyaltyPromotionIncentive");
var loyaltyPromotionTriggerLimit_1 = require("./loyaltyPromotionTriggerLimit");
var money_1 = require("./money");
exports.loyaltyPromotionSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.string)()],
    incentive: ['incentive', (0, schema_1.lazy)(function () { return loyaltyPromotionIncentive_1.loyaltyPromotionIncentiveSchema; })],
    availableTime: [
        'available_time',
        (0, schema_1.lazy)(function () { return loyaltyPromotionAvailableTimeData_1.loyaltyPromotionAvailableTimeDataSchema; }),
    ],
    triggerLimit: [
        'trigger_limit',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyPromotionTriggerLimit_1.loyaltyPromotionTriggerLimitSchema; })),
    ],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    canceledAt: ['canceled_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    loyaltyProgramId: ['loyalty_program_id', (0, schema_1.optional)((0, schema_1.string)())],
    minimumSpendAmountMoney: [
        'minimum_spend_amount_money',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; })),
    ],
    qualifyingItemVariationIds: [
        'qualifying_item_variation_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    qualifyingCategoryIds: [
        'qualifying_category_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ]
});
//# sourceMappingURL=loyaltyPromotion.js.map