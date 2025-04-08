"use strict";
exports.__esModule = true;
exports.orderLineItemModifierSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.orderLineItemModifierSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogObjectId: ['catalog_object_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    catalogVersion: ['catalog_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    name: ['name', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    quantity: ['quantity', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    basePriceMoney: ['base_price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    totalPriceMoney: ['total_price_money', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.dict)((0, schema_1.string)())))]
});
//# sourceMappingURL=orderLineItemModifier.js.map