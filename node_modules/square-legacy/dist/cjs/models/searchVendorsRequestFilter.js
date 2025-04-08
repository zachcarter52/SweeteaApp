"use strict";
exports.__esModule = true;
exports.searchVendorsRequestFilterSchema = void 0;
var schema_1 = require("../schema");
exports.searchVendorsRequestFilterSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))],
    status: ['status', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))]
});
//# sourceMappingURL=searchVendorsRequestFilter.js.map