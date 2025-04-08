"use strict";
exports.__esModule = true;
exports.updateItemModifierListsRequestSchema = void 0;
var schema_1 = require("../schema");
exports.updateItemModifierListsRequestSchema = (0, schema_1.object)({
    itemIds: ['item_ids', (0, schema_1.array)((0, schema_1.string)())],
    modifierListsToEnable: [
        'modifier_lists_to_enable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    modifierListsToDisable: [
        'modifier_lists_to_disable',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ]
});
//# sourceMappingURL=updateItemModifierListsRequest.js.map