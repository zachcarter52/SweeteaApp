"use strict";
exports.__esModule = true;
exports.bulkCreateVendorsRequestSchema = void 0;
var schema_1 = require("../schema");
var vendor_1 = require("./vendor");
exports.bulkCreateVendorsRequestSchema = (0, schema_1.object)({ vendors: ['vendors', (0, schema_1.dict)((0, schema_1.lazy)(function () { return vendor_1.vendorSchema; }))] });
//# sourceMappingURL=bulkCreateVendorsRequest.js.map