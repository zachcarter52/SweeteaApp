"use strict";
exports.__esModule = true;
exports.checkoutLocationSettingsPolicySchema = void 0;
var schema_1 = require("../schema");
exports.checkoutLocationSettingsPolicySchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    title: ['title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    description: ['description', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=checkoutLocationSettingsPolicy.js.map