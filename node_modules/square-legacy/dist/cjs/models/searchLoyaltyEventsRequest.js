"use strict";
exports.__esModule = true;
exports.searchLoyaltyEventsRequestSchema = void 0;
var schema_1 = require("../schema");
var loyaltyEventQuery_1 = require("./loyaltyEventQuery");
exports.searchLoyaltyEventsRequestSchema = (0, schema_1.object)({
    query: ['query', (0, schema_1.optional)((0, schema_1.lazy)(function () { return loyaltyEventQuery_1.loyaltyEventQuerySchema; }))],
    limit: ['limit', (0, schema_1.optional)((0, schema_1.number)())],
    cursor: ['cursor', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=searchLoyaltyEventsRequest.js.map