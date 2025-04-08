"use strict";
exports.__esModule = true;
exports.orderFulfillmentUpdatedUpdateSchema = void 0;
var schema_1 = require("../schema");
exports.orderFulfillmentUpdatedUpdateSchema = (0, schema_1.object)({
    fulfillmentUid: ['fulfillment_uid', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    oldState: ['old_state', (0, schema_1.optional)((0, schema_1.string)())],
    newState: ['new_state', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=orderFulfillmentUpdatedUpdate.js.map