"use strict";
exports.__esModule = true;
exports.publishInvoiceRequestSchema = void 0;
var schema_1 = require("../schema");
exports.publishInvoiceRequestSchema = (0, schema_1.object)({
    version: ['version', (0, schema_1.number)()],
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=publishInvoiceRequest.js.map