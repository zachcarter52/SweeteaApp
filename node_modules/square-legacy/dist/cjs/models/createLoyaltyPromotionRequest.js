"use strict";
exports.__esModule = true;
exports.createLoyaltyPromotionRequestSchema = void 0;
var schema_1 = require("../schema");
var loyaltyPromotion_1 = require("./loyaltyPromotion");
exports.createLoyaltyPromotionRequestSchema = (0, schema_1.object)({
    loyaltyPromotion: ['loyalty_promotion', (0, schema_1.lazy)(function () { return loyaltyPromotion_1.loyaltyPromotionSchema; })],
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()]
});
//# sourceMappingURL=createLoyaltyPromotionRequest.js.map