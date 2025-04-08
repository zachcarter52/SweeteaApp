import { array, nullable, object, optional, string } from '../schema';
export const updateItemModifierListsRequestSchema = object({
    itemIds: ['item_ids', array(string())],
    modifierListsToEnable: [
        'modifier_lists_to_enable',
        optional(nullable(array(string()))),
    ],
    modifierListsToDisable: [
        'modifier_lists_to_disable',
        optional(nullable(array(string()))),
    ],
});
//# sourceMappingURL=updateItemModifierListsRequest.js.map