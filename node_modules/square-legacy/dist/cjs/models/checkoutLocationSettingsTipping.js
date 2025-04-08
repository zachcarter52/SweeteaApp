"use strict";
exports.__esModule = true;
exports.checkoutLocationSettingsTippingSchema = void 0;
var schema_1 = require("../schema");
var money_1 = require("./money");
exports.checkoutLocationSettingsTippingSchema = (0, schema_1.object)({
    percentages: ['percentages', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.number)())))],
    smartTippingEnabled: [
        'smart_tipping_enabled',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    defaultPercent: ['default_percent', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)()))],
    smartTips: [
        'smart_tips',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return money_1.moneySchema; })))),
    ],
    defaultSmartTip: ['default_smart_tip', (0, schema_1.optional)((0, schema_1.lazy)(function () { return money_1.moneySchema; }))]
});
//# sourceMappingURL=checkoutLocationSettingsTipping.js.map