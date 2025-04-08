"use strict";
exports.__esModule = true;
exports.checkoutLocationSettingsBrandingSchema = void 0;
var schema_1 = require("../schema");
exports.checkoutLocationSettingsBrandingSchema = (0, schema_1.object)({
    headerType: ['header_type', (0, schema_1.optional)((0, schema_1.string)())],
    buttonColor: ['button_color', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buttonShape: ['button_shape', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=checkoutLocationSettingsBranding.js.map