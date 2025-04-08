"use strict";
exports.__esModule = true;
exports.bulkRetrieveVendorsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.bulkRetrieveVendorsRequestSchema = (0, schema_1.object)({ vendorIds: ['vendor_ids', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)())))] });
//# sourceMappingURL=bulkRetrieveVendorsRequest.js.map