"use strict";
exports.__esModule = true;
exports.searchOrdersSortSchema = void 0;
var schema_1 = require("../schema");
exports.searchOrdersSortSchema = (0, schema_1.object)({
    sortField: ['sort_field', (0, schema_1.string)()],
    sortOrder: ['sort_order', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchOrdersSort.js.map