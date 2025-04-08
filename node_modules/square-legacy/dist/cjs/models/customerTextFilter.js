"use strict";
exports.__esModule = true;
exports.customerTextFilterSchema = void 0;
var schema_1 = require("../schema");
exports.customerTextFilterSchema = (0, schema_1.object)({
    exact: ['exact', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    fuzzy: ['fuzzy', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=customerTextFilter.js.map