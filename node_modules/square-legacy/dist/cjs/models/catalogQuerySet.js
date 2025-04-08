"use strict";
exports.__esModule = true;
exports.catalogQuerySetSchema = void 0;
var schema_1 = require("../schema");
exports.catalogQuerySetSchema = (0, schema_1.object)({
    attributeName: ['attribute_name', (0, schema_1.string)()],
    attributeValues: ['attribute_values', (0, schema_1.array)((0, schema_1.string)())]
});
//# sourceMappingURL=catalogQuerySet.js.map