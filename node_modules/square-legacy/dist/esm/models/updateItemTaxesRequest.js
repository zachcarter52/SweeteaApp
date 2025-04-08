import { array, nullable, object, optional, string } from '../schema';
export const updateItemTaxesRequestSchema = object({
    itemIds: ['item_ids', array(string())],
    taxesToEnable: ['taxes_to_enable', optional(nullable(array(string())))],
    taxesToDisable: ['taxes_to_disable', optional(nullable(array(string())))],
});
//# sourceMappingURL=updateItemTaxesRequest.js.map