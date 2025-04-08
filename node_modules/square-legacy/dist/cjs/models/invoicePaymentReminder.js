"use strict";
exports.__esModule = true;
exports.invoicePaymentReminderSchema = void 0;
var schema_1 = require("../schema");
exports.invoicePaymentReminderSchema = (0, schema_1.object)({
    uid: ['uid', (0, schema_1.optional)((0, schema_1.string)())],
    relativeScheduledDays: [
        'relative_scheduled_days',
        (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.number)())),
    ],
    message: ['message', (0, schema_1.optional)((0, schema_1.nullable)((0, schema_1.string)()))],
    status: ['status', (0, schema_1.optional)((0, schema_1.string)())],
    sentAt: ['sent_at', (0, schema_1.optional)((0, schema_1.string)())]
});
//# sourceMappingURL=invoicePaymentReminder.js.map