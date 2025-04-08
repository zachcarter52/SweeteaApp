"use strict";
exports.__esModule = true;
exports.updateItemTaxesRequestSchema = void 0;
var schema_1 = require("../schema");
exports.updateItemTaxesRequestSchema = (0, schema_1.object)({
    itemIds: ['item_ids', (0, schema_1.array)((0, schema_1.string)())],
    taxesToEnable: ['taxes_to_enable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    taxesToDisable: ['taxes_to_disable', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=updateItemTaxesRequest.js.map