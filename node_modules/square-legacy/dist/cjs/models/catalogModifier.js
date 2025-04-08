"use strict";
exports.__esModule = true;
exports.catalogModifierSchema = void 0;
var schema_1 = require("../schema");
var modifierLocationOverrides_1 = require("./modifierLocationOverrides");
var money_1 = require("./money");
exports.catalogModifierSchema = (0, schema_1.object)({
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    priceMoney: ['price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    modifierListId: ['modifier_list_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationOverrides: [
        'location_overrides',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return modifierLocationOverrides_1.modifierLocationOverridesSchema; })))),
    ],
    imageId: ['image_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=catalogModifier.js.map