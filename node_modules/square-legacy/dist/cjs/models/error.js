"use strict";
exports.__esModule = true;
exports.errorSchema = void 0;
var schema_1 = require("../schema");
exports.errorSchema = (0, schema_1.object)({
    category: ['category', (0, schema_1.string)()],
    code: ['code', (0, schema_1.string)()],
    detail: ['detail', (0, schema_1.optional)((0, schema_1.string)())],
    field: ['field', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=error.js.map