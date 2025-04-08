"use strict";
exports.__esModule = true;
exports.catalogQuerySortedAttributeSchema = void 0;
var schema_1 = require("../schema");
exports.catalogQuerySortedAttributeSchema = (0, schema_1.object)({
    attributeName: ['attribute_name', (0, schema_1.string)()],
    initialAttributeValue: [
        'initial_attribute_value',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=catalogQuerySortedAttribute.js.map