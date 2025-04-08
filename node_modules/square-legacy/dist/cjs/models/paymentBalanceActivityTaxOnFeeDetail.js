"use strict";
exports.__esModule = true;
exports.paymentBalanceActivityTaxOnFeeDetailSchema = void 0;
var schema_1 = require("../schema");
exports.paymentBalanceActivityTaxOnFeeDetailSchema = (0, schema_1.object)({
    paymentId: ['payment_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    taxRateDescription: ['tax_rate_description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=paymentBalanceActivityTaxOnFeeDetail.js.map