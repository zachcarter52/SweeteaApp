"use strict";
exports.__esModule = true;
exports.deviceCheckoutOptionsSchema = void 0;
var schema_1 = require("../schema");
var tipSettings_1 = require("./tipSettings");
exports.deviceCheckoutOptionsSchema = (0, schema_1.object)({
    deviceId: ['device_id', (0, schema_1.string)()],
    skipReceiptScreen: ['skip_receipt_screen', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    collectSignature: ['collect_signature', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    tipSettings: ['tip_settings', (0, schema_1.optional)((0, schema_1.lazy)(function () { return tipSettings_1.tipSettingsSchema; }))],
    showItemizedCart: ['show_itemized_cart', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=deviceCheckoutOptions.js.map