"use strict";
exports.__esModule = true;
exports.catalogModifierOverrideSchema = void 0;
var schema_1 = require("../schema");
exports.catalogModifierOverrideSchema = (0, schema_1.object)({
    modifierId: ['modifier_id', (0, schema_1.string)()],
    onByDefault: ['on_by_default', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))]
});
//# sourceMappingURL=catalogModifierOverride.js.map