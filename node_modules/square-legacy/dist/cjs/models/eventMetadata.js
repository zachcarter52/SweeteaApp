"use strict";
exports.__esModule = true;
exports.eventMetadataSchema = void 0;
var schema_1 = require("../schema");
exports.eventMetadataSchema = (0, schema_1.object)({
    eventId: ['event_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    apiVersion: ['api_version', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=eventMetadata.js.map