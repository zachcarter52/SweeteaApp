"use strict";
exports.__esModule = true;
exports.listCardsResponseSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
var error_1 = require("./error");
exports.listCardsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    cards: ['cards', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return card_1.cardSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=listCardsResponse.js.map