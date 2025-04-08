"use strict";
exports.__esModule = true;
exports.phaseInputSchema = void 0;
var schema_1 = require("../schema");
exports.phaseInputSchema = (0, schema_1.object)({
    ordinal: ['ordinal', (0, schema_1.bigint)()],
    orderTemplateId: ['order_template_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=phaseInput.js.map