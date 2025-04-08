"use strict";
exports.__esModule = true;
exports.catalogItemModifierListInfoSchema = void 0;
var schema_1 = require("../schema");
var catalogModifierOverride_1 = require("./catalogModifierOverride");
exports.catalogItemModifierListInfoSchema = (0, schema_1.object)({
    modifierListId: ['modifier_list_id', (0, schema_1.string)()],
    modifierOverrides: [
        'modifier_overrides',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogModifierOverride_1.catalogModifierOverrideSchema; })))),
    ],
    minSelectedModifiers: [
        'min_selected_modifiers',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    maxSelectedModifiers: [
        'max_selected_modifiers',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    enabled: ['enabled', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))]
});
//# sourceMappingURL=catalogItemModifierListInfo.js.map