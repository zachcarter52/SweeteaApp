"use strict";
exports.__esModule = true;
exports.deleteCustomerCustomAttributeResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
exports.deleteCustomerCustomAttributeResponseSchema = (0, schema_1.object)({ errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))] });
//# sourceMappingURL=deleteCustomerCustomAttributeResponse.js.map