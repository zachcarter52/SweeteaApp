"use strict";
exports.__esModule = true;
exports.eventTypeMetadataSchema = void 0;
var schema_1 = require("../schema");
exports.eventTypeMetadataSchema = (0, schema_1.object)({
    eventType: ['event_type', (0, schema_1.optional)((0, schema_1.string)())],
    apiVersionIntroduced: ['api_version_introduced', (0, schema_1.optional)((0, schema_1.string)())],
    releaseStatus: ['release_status', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=eventTypeMetadata.js.map