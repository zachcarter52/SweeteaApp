"use strict";
exports.__esModule = true;
exports.createCustomerGroupRequestSchema = void 0;
var schema_1 = require("../schema");
var customerGroup_1 = require("./customerGroup");
exports.createCustomerGroupRequestSchema = (0, schema_1.object)({
    idempotencyKey: ['idempotency_key', (0, schema_1.optional)((0, schema_1.string)())],
    group: ['group', (0, schema_1.lazy)(function () { return customerGroup_1.customerGroupSchema; })]
});
//# sourceMappingURL=createCustomerGroupRequest.js.map