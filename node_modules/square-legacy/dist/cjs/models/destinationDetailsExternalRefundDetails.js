"use strict";
exports.__esModule = true;
exports.destinationDetailsExternalRefundDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.destinationDetailsExternalRefundDetailsSchema = (0, schema_1.object)({
    type: ['type', (0, schema_1.string)()],
    source: ['source', (0, schema_1.string)()],
    sourceId: ['source_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=destinationDetailsExternalRefundDetails.js.map