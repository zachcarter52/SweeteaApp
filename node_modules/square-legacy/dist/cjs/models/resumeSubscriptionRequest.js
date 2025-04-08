"use strict";
exports.__esModule = true;
exports.resumeSubscriptionRequestSchema = void 0;
var schema_1 = require("../schema");
exports.resumeSubscriptionRequestSchema = (0, schema_1.object)({
    resumeEffectiveDate: [
        'resume_effective_date',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)())),
    ],
    resumeChangeTiming: ['resume_change_timing', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=resumeSubscriptionRequest.js.map