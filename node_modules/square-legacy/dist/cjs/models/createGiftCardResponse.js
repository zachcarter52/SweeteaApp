"use strict";
exports.__esModule = true;
exports.createGiftCardResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var giftCard_1 = require("./giftCard");
exports.createGiftCardResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    giftCard: ['gift_card', (0, schema_1.optional)((0, schema_1.lazy)(function () { return giftCard_1.giftCardSchema; }))]
});
//# sourceMappingURL=createGiftCardResponse.js.map