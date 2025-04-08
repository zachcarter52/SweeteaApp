"use strict";
exports.__esModule = true;
exports.createGiftCardActivityResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var giftCardActivity_1 = require("./giftCardActivity");
exports.createGiftCardActivityResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    giftCardActivity: [
        'gift_card_activity',
        (0, schema_1.optional)((0, schema_1.lazy)(function () { return giftCardActivity_1.giftCardActivitySchema; })),
    ]
});
//# sourceMappingURL=createGiftCardActivityResponse.js.map