"use strict";
exports.__esModule = true;
exports.phaseSchema = void 0;
var schema_1 = require("../schema");
exports.phaseSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    ordinal: ['ordinal', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    orderTemplateId: ['order_template_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    planPhaseUid: ['plan_phase_uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=phase.js.map