import { nullable, object, optional, string } from '../schema';
export const v1UpdateOrderRequestSchema = object({
    action: ['action', string()],
    shippedTrackingNumber: [
        'shipped_tracking_number',
        optional(nullable(string())),
    ],
    completedNote: ['completed_note', optional(nullable(string()))],
    refundedNote: ['refunded_note', optional(nullable(string()))],
    canceledNote: ['canceled_note', optional(nullable(string()))],
});
//# sourceMappingURL=v1UpdateOrderRequest.js.map