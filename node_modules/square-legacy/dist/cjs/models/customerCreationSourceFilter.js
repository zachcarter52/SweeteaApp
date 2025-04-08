"use strict";
exports.__esModule = true;
exports.customerCreationSourceFilterSchema = void 0;
var schema_1 = require("../schema");
exports.customerCreationSourceFilterSchema = (0, schema_1.object)({
    values: ['values', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    rule: ['rule', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=customerCreationSourceFilter.js.map