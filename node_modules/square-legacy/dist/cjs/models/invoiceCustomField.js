"use strict";
exports.__esModule = true;
exports.invoiceCustomFieldSchema = void 0;
var schema_1 = require("../schema");
exports.invoiceCustomFieldSchema = (0, schema_1.object)({
    label: ['label', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    value: ['value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    placement: ['placement', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=invoiceCustomField.js.map