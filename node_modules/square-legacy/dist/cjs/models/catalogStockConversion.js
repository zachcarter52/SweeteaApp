"use strict";
exports.__esModule = true;
exports.catalogStockConversionSchema = void 0;
var schema_1 = require("../schema");
exports.catalogStockConversionSchema = (0, schema_1.object)({
    stockableItemVariationId: ['stockable_item_variation_id', (0, schema_1.string)()],
    stockableQuantity: ['stockable_quantity', (0, schema_1.string)()],
    nonstockableQuantity: ['nonstockable_quantity', (0, schema_1.string)()]
});
//# sourceMappingURL=catalogStockConversion.js.map