"use strict";
exports.__esModule = true;
exports.destinationDetailsCardRefundDetailsSchema = void 0;
var schema_1 = require("../schema");
var card_1 = require("./card");
exports.destinationDetailsCardRefundDetailsSchema = (0, schema_1.object)({
    card: ['card', (0, schema_1.optional)((0, schema_1.lazy)(function () { return card_1.cardSchema; }))],
    entryMethod: ['entry_method', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    authResultCode: ['auth_result_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=destinationDetailsCardRefundDetails.js.map