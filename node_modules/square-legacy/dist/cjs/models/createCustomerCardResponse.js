"use strict";
exports.__esModule = true;
exports.createCustomerCardResponseSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
var error_1 = require("./error");
exports.createCustomerCardResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    card: ['card', (0, schema_1.optional)((0, schema_1.lazy)(function () { return card_1.cardSchema; }))]
});
//# sourceMappingURL=createCustomerCardResponse.js.map