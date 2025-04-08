"use strict";
exports.__esModule = true;
exports.saveCardOptionsSchema = void 0;
var schema_1 = require("../schema");
exports.saveCardOptionsSchema = (0, schema_1.object)({
    customerId: ['customer_id', (0, schema_1.string)()],
    cardId: ['card_id', (0, schema_1.optional)((0, schema_1.string)())],
    referenceId: ['reference_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=saveCardOptions.js.map