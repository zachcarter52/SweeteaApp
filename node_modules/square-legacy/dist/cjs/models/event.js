"use strict";
exports.__esModule = true;
exports.eventSchema = void 0;
var schema_1 = require("../schema");
var eventData_1 = require("./eventData");
exports.eventSchema = (0, schema_1.object)({
    merchantId: ['merchant_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    locationId: ['location_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    type: ['type', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    eventId: ['event_id', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    createdAt: ['created_at', (0, schema_1.optional)((0, schema_1.string)())],
    data: ['data', (0, schema_1.optional)((0, schema_1.lazy)(function () { return eventData_1.eventDataSchema; }))]
});
//# sourceMappingURL=event.js.map