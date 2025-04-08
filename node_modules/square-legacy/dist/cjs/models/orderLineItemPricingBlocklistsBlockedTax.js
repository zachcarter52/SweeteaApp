"use strict";
exports.__esModule = true;
exports.orderLineItemPricingBlocklistsBlockedTaxSchema = void 0;
var schema_1 = require("../schema");
exports.orderLineItemPricingBlocklistsBlockedTaxSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    taxUid: ['tax_uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    taxCatalogObjectId: ['tax_catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=orderLineItemPricingBlocklistsBlockedTax.js.map