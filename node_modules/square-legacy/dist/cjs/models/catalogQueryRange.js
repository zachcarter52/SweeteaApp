"use strict";
exports.__esModule = true;
exports.catalogQueryRangeSchema = void 0;
var schema_1 = require("../schema");
exports.catalogQueryRangeSchema = (0, schema_1.object)({
    attributeName: ['attribute_name', (0, schema_1.string)()],
    attributeMinValue: ['attribute_min_value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    attributeMaxValue: ['attribute_max_value', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))]
});
//# sourceMappingURL=catalogQueryRange.js.map