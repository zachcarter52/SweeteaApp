"use strict";
exports.__esModule = true;
exports.catalogQuickAmountsSettingsSchema = void 0;
var schema_1 = require("../schema");
var catalogQuickAmount_1 = require("./catalogQuickAmount");
exports.catalogQuickAmountsSettingsSchema = (0, schema_1.object)({
    option: ['option', (0, schema_1.string)()],
    eligibleForAutoAmounts: [
        'eligible_for_auto_amounts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)())),
    ],
    amounts: [
        'amounts',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.lazy)(function () { return catalogQuickAmount_1.catalogQuickAmountSchema; })))),
    ]
});
//# sourceMappingURL=catalogQuickAmountsSettings.js.map