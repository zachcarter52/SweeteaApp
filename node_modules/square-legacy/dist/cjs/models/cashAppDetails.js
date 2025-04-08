"use strict";
exports.__esModule = true;
exports.cashAppDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.cashAppDetailsSchema = (0, schema_1.object)({
    buyerFullName: ['buyer_full_name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerCountryCode: ['buyer_country_code', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerCashtag: ['buyer_cashtag', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=cashAppDetails.js.map