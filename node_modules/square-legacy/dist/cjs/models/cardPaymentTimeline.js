"use strict";
exports.__esModule = true;
exports.cardPaymentTimelineSchema = void 0;
var schema_1 = require("../schema");
exports.cardPaymentTimelineSchema = (0, schema_1.object)({
    authorizedAt: ['authorized_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    capturedAt: ['captured_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    voidedAt: ['voided_at', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=cardPaymentTimeline.js.map