"use strict";
exports.__esModule = true;
exports.tenderCardDetailsSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
exports.tenderCardDetailsSchema = (0, schema_1.object)({
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    card: ['card', (0, schema_1.optional)((0, schema_1.lazy)(function () { return card_1.cardSchema; }))],
    entryMethod: ['entry_method', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=tenderCardDetails.js.map