"use strict";
exports.__esModule = true;
exports.modifierLocationOverridesSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.modifierLocationOverridesSchema = (0, schema_1.object)({
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    priceMoney: ['price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    soldOut: ['sold_out', (0, schema_1.optional)((0, schema_1.boolean)())]
});
//# sourceMappingURL=modifierLocationOverrides.js.map