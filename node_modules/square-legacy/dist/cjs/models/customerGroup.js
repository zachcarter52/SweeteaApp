"use strict";
exports.__esModule = true;
exports.customerGroupSchema = void 0;
var schema_1 = require("../schema");
exports.customerGroupSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    name: ['name', (0, schema_1.string)()],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=customerGroup.js.map