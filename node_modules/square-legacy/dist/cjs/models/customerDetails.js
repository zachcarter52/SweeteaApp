"use strict";
exports.__esModule = true;
exports.customerDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.customerDetailsSchema = (0, schema_1.object)({
    customerInitiated: ['customer_initiated', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    sellerKeyedIn: ['seller_keyed_in', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=customerDetails.js.map