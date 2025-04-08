import { nullable, number, object, optional, string } from '../schema';
export const invoicePaymentReminderSchema = object({
    uid: ['uid', optional(string())],
    relativeScheduledDays: [
        'relative_scheduled_days',
        optional(nullable(number())),
    ],
    message: ['message', optional(nullable(string()))],
    status: ['status', optional(string())],
    sentAt: ['sent_at', optional(string())],
});
//# sourceMappingURL=invoicePaymentReminder.js.map