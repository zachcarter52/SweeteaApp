"use strict";
exports.__esModule = true;
exports.searchOrdersFulfillmentFilterSchema = void 0;
var schema_1 = require("../schema");
exports.searchOrdersFulfillmentFilterSchema = (0, schema_1.object)({
    fulfillmentTypes: [
        'fulfillment_types',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ],
    fulfillmentStates: [
        'fulfillment_states',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.array)((0, schema_1.string)()))),
    ]
});
//# sourceMappingURL=searchOrdersFulfillmentFilter.js.map