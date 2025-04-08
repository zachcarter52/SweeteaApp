"use strict";
exports.__esModule = true;
exports.createVendorResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var vendor_1 = require("./vendor");
exports.createVendorResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    vendor: ['vendor', (0, schema_1.optional)((0, schema_1.lazy)(function () { return vendor_1.vendorSchema; }))]
});
//# sourceMappingURL=createVendorResponse.js.map