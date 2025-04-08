"use strict";
exports.__esModule = true;
exports.listGiftCardsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var giftCard_1 = require("./giftCard");
exports.listGiftCardsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    giftCards: ['gift_cards', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return giftCard_1.giftCardSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listGiftCardsResponse.js.map