"use strict";
exports.__esModule = true;
exports.updateCustomerGroupResponseSchema = void 0;
var schema_1 = require("../schema");
var customerGroup_1 = require("./customerGroup");
var error_1 = require("./error");
exports.updateCustomerGroupResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    group: ['group', (0, schema_1.optional)((0, schema_1.lazy)(function () { return customerGroup_1.customerGroupSchema; }))]
});
//# sourceMappingURL=updateCustomerGroupResponse.js.map