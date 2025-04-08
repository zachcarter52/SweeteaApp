"use strict";
exports.__esModule = true;
exports.createGiftCardActivityRequestSchema = void 0;
var schema_1 = require("../schema");
var giftCardActivity_1 = require("./giftCardActivity");
exports.createGiftCardActivityRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.string)()],
    giftCardActivity: [
        'gift_card_activity',
        (0, schema_1.lazy)(function () { return giftCardActivity_1.giftCardActivitySchema; }),
    ]
});
//# sourceMappingURL=createGiftCardActivityRequest.js.map