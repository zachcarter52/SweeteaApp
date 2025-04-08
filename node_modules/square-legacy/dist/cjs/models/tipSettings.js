"use strict";
exports.__esModule = true;
exports.tipSettingsSchema = void 0;
var schema_1 = require("../schema");
exports.tipSettingsSchema = (0, schema_1.object)({
    allowTipping: ['allow_tipping', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    separateTipScreen: ['separate_tip_screen', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    customTipField: ['custom_tip_field', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    tipPercentages: ['tip_percentages', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.number)())))],
    smartTipping: ['smart_tipping', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=tipSettings.js.map