"use strict";
exports.__esModule = true;
exports.listWebhookEventTypesResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var eventTypeMetadata_1 = require("./eventTypeMetadata");
exports.listWebhookEventTypesResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    eventTypes: ['event_types', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.string)()))],
    metadata: [
        'metadata',
        (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return eventTypeMetadata_1.eventTypeMetadataSchema; }))),
    ]
});
//# sourceMappingURL=listWebhookEventTypesResponse.js.map