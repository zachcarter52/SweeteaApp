"use strict";
exports.__esModule = true;
exports.catalogInfoResponseLimitsSchema = void 0;
var schema_1 = require("../schema");
exports.catalogInfoResponseLimitsSchema = (0, schema_1.object)({
    batchUpsertMaxObjectsPerBatch: [
        'batch_upsert_max_objects_per_batch',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    batchUpsertMaxTotalObjects: [
        'batch_upsert_max_total_objects',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    batchRetrieveMaxObjectIds: [
        'batch_retrieve_max_object_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    searchMaxPageLimit: ['search_max_page_limit', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    batchDeleteMaxObjectIds: [
        'batch_delete_max_object_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemTaxesMaxItemIds: [
        'update_item_taxes_max_item_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemTaxesMaxTaxesToEnable: [
        'update_item_taxes_max_taxes_to_enable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemTaxesMaxTaxesToDisable: [
        'update_item_taxes_max_taxes_to_disable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemModifierListsMaxItemIds: [
        'update_item_modifier_lists_max_item_ids',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemModifierListsMaxModifierListsToEnable: [
        'update_item_modifier_lists_max_modifier_lists_to_enable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    updateItemModifierListsMaxModifierListsToDisable: [
        'update_item_modifier_lists_max_modifier_lists_to_disable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ]
});
//# sourceMappingURL=catalogInfoResponseLimits.js.map