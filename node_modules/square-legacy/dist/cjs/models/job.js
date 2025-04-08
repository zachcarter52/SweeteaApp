"use strict";
exports.__esModule = true;
exports.jobSchema = void 0;
var schema_1 = require("../schema");
exports.jobSchema = (0, schema_1.object)({
    id: ['id', (0, schema_1.optional)((0, schema_1.string)())],
    title: ['title', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    isTipEligible: ['is_tip_eligible', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.boolean)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    updatedAt: ['updated_at', (0, schema_1.optional)((0, schema_1.string)())],
    version: ['version', (0, schema_1.optional)((0, schema_1.number)())]
});
//# sourceMappingURL=job.js.map