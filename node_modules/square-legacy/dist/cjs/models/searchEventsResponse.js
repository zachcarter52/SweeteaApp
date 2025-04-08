"use strict";
exports.__esModule = true;
exports.searchEventsResponseSchema = void 0;
var schema_1 = require("../schema");
var error_1 = require("./error");
var event_1 = require("./event");
var eventMetadata_1 = require("./eventMetadata");
exports.searchEventsResponseSchema = (0, schema_1.object)({
    errors: ['errors', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return error_1.errorSchema; })))],
    events: ['events', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return event_1.eventSchema; })))],
    metadata: ['metadata', (0, schema_1.optional)((0, schema_1.array)((0, schema_1.lazy)(function () { return eventMetadata_1.eventMetadataSchema; })))],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchEventsResponse.js.map