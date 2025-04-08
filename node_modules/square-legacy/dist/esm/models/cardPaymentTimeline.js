import { nullable, object, optional, string } from '../schema';
export const cardPaymentTimelineSchema = object({
    authorizedAt: ['authorized_at', optional(nullable(string()))],
    capturedAt: ['captured_at', optional(nullable(string()))],
    voidedAt: ['voided_at', optional(nullable(string()))],
});
//# sourceMappingURL=cardPaymentTimeline.js.map