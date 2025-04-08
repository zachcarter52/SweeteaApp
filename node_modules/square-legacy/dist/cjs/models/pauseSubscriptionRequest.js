"use strict";
exports.__esModule = true;
exports.pauseSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
exports.pauseSubscriptionRequestSchema = (0, schema_1.object)({
    pauseEffectiveDate: ['pause_effective_date', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    pauseCycleDuration: ['pause_cycle_duration', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.bigint)()))],
    resumeEffectiveDate: [
        'resume_effective_date',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    resumeChangeTiming: ['resume_change_timing', (0, schema_1.optional)((0, schema_1.string)())],
    pauseReason: ['pause_reason', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))]
});
//# sourceMappingURL=pauseSubscriptionRequest.js.map