"use strict";
exports.__esModule = true;
exports.updateItemTaxesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.updateItemTaxesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=updateItemTaxesResponse.js.map