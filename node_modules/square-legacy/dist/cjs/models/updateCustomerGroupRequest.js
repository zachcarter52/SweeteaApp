"use strict";
exports.__esModule = true;
exports.updateCustomerGroupRequestSchema = void 0;
var schema_1 = require("../schema");
var customerGroup_1 = require("./customerGroup");
exports.updateCustomerGroupRequestSchema = (0, schema_1.object)({ group: ['group', (0, schema_1.lazy)(function () { return customerGroup_1.customerGroupSchema; })] });
//# sourceMappingURL=updateCustomerGroupRequest.js.map