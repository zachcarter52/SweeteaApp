"use strict";
exports.__esModule = true;
exports.cancelLoyaltyPromotionResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var loyaltyPromotion_1 = require("./loyaltyPromotion");
exports.cancelLoyaltyPromotionResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    loyaltyPromotion: [
        'loyalty_promotion',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyPromotion_1.loyaltyPromotionSchema; })),
    ]
});
//# sourceMappingURL=cancelLoyaltyPromotionResponse.js.map