"use strict";
exports.__esModule = true;
exports.changeBillingAnchorDateRequestSchema = void 0;
var schema_1 = require("../schema");
exports.changeBillingAnchorDateRequestSchema = (0, schema_1.object)({
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    effectiveDate: ['effective_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=changeBillingAnchorDateRequest.js.map