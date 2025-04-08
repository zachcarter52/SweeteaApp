"use strict";
exports.__esModule = true;
exports.orderPricingOptionsSchema = void 0;
var schema_1 = require("../schema");
exports.orderPricingOptionsSchema = (0, schema_1.object)({
    autoApplyDiscounts: ['auto_apply_discounts', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    autoApplyTaxes: ['auto_apply_taxes', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=orderPricingOptions.js.map