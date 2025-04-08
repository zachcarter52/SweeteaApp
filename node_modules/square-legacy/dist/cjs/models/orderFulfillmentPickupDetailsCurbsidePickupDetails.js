"use strict";
exports.__esModule = true;
exports.orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema = void 0;
var schema_1 = require("../schema");
exports.orderFulfillmentPickupDetailsCurbsidePickupDetailsSchema = (0, schema_1.object)({
    curbsideDetails: ['curbside_details', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    buyerArrivedAt: ['buyer_arrived_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=orderFulfillmentPickupDetailsCurbsidePickupDetails.js.map