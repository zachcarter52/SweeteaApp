"use strict";
exports.__esModule = true;
exports.createGiftCardRequestSchema = void 0;
var schema_1 = require("../schema");
var giftCard_1 = require("./giftCard");
exports.createGiftCardRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    locationId: ['location_id', (0, schema_1.string)()],
    giftCard: ['gift_card', (0, schema_1.lazy)(function () { return giftCard_1.giftCardSchema; })]
});
//# sourceMappingURL=createGiftCardRequest.js.map