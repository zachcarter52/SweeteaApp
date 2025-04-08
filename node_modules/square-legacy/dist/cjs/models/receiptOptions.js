"use strict";
exports.__esModule = true;
exports.receiptOptionsSchema = void 0;
var schema_1 = require("../schema");
exports.receiptOptionsSchema = (0, schema_1.object)({
    paymentId: ['payment_id', (0, schema_1.string)()],
    printOnly: ['print_only', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    isDuplicate: ['is_duplicate', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=receiptOptions.js.map