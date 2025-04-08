"use strict";
exports.__esModule = true;
exports.loyaltyPromotionIncentiveSchema = void 0;
var schema_1 = require("../schema");
var loyaltyPromotionIncentivePointsAdditionData_1 = require("./loyaltyPromotionIncentivePointsAdditionData");
var loyaltyPromotionIncentivePointsMultiplierData_1 = require("./loyaltyPromotionIncentivePointsMultiplierData");
exports.loyaltyPromotionIncentiveSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    pointsMultiplierData: [
        'points_multiplier_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyPromotionIncentivePointsMultiplierData_1.loyaltyPromotionIncentivePointsMultiplierDataSchema; })),
    ],
    pointsAdditionData: [
        'points_addition_data',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyPromotionIncentivePointsAdditionData_1.loyaltyPromotionIncentivePointsAdditionDataSchema; })),
    ]
});
//# sourceMappingURL=loyaltyPromotionIncentive.js.map