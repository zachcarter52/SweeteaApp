"use strict";
exports.__esModule = true;
exports.disputeEvidenceFileSchema = void 0;
var schema_1 = require("../schema");
exports.disputeEvidenceFileSchema = (0, schema_1.object)({
    filename: ['filename', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    filetype: ['filetype', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=disputeEvidenceFile.js.map