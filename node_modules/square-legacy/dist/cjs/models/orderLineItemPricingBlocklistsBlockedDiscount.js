"use strict";
exports.__esModule = true;
exports.orderLineItemPricingBlocklistsBlockedDiscountSchema = void 0;
var schema_1 = require("../schema");
exports.orderLineItemPricingBlocklistsBlockedDiscountSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    discountUid: ['discount_uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    discountCatalogObjectId: [
        'discount_catalog_object_id',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ]
});
//# sourceMappingURL=orderLineItemPricingBlocklistsBlockedDiscount.js.map