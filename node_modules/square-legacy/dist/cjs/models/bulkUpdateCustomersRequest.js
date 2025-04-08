"use strict";
exports.__esModule = true;
exports.bulkUpdateCustomersRequestSchema = void 0;
var schema_1 = require("../schema");
var bulkUpdateCustomerData_1 = require("./bulkUpdateCustomerData");
exports.bulkUpdateCustomersRequestSchema = (0, schema_1.object)({ customers: ['customers', (0, schema_1.dict)((0, schema_1.lazy)(function () { return bulkUpdateCustomerData_1.bulkUpdateCustomerDataSchema; }))] });
//# sourceMappingURL=bulkUpdateCustomersRequest.js.map