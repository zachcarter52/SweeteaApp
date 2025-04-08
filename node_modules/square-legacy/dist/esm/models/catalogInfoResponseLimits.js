import { nullable, number, object, optional } from '../schema';
export const catalogInfoResponseLimitsSchema = object({
    batchUpsertMaxObjectsPerBatch: [
        'batch_upsert_max_objects_per_batch',
        optional(nullable(number())),
    ],
    batchUpsertMaxTotalObjects: [
        'batch_upsert_max_total_objects',
        optional(nullable(number())),
    ],
    batchRetrieveMaxObjectIds: [
        'batch_retrieve_max_object_ids',
        optional(nullable(number())),
    ],
    searchMaxPageLimit: ['search_max_page_limit', optional(nullable(number()))],
    batchDeleteMaxObjectIds: [
        'batch_delete_max_object_ids',
        optional(nullable(number())),
    ],
    updateItemTaxesMaxItemIds: [
        'update_item_taxes_max_item_ids',
        optional(nullable(number())),
    ],
    updateItemTaxesMaxTaxesToEnable: [
        'update_item_taxes_max_taxes_to_enable',
        optional(nullable(number())),
    ],
    updateItemTaxesMaxTaxesToDisable: [
        'update_item_taxes_max_taxes_to_disable',
        optional(nullable(number())),
    ],
    updateItemModifierListsMaxItemIds: [
        'update_item_modifier_lists_max_item_ids',
        optional(nullable(number())),
    ],
    updateItemModifierListsMaxModifierListsToEnable: [
        'update_item_modifier_lists_max_modifier_lists_to_enable',
        optional(nullable(number())),
    ],
    updateItemModifierListsMaxModifierListsToDisable: [
        'update_item_modifier_lists_max_modifier_lists_to_disable',
        optional(nullable(number())),
    ],
});
//# sourceMappingURL=catalogInfoResponseLimits.js.map