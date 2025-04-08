import { object, string } from '../schema';
export const catalogStockConversionSchema = object({
    stockableItemVariationId: ['stockable_item_variation_id', string()],
    stockableQuantity: ['stockable_quantity', string()],
    nonstockableQuantity: ['nonstockable_quantity', string()],
});
//# sourceMappingURL=catalogStockConversion.js.map