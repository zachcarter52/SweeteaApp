import { lazy, nullable, object, optional, string } from '../schema';
import { orderFulfillmentRecipientSchema, } from './orderFulfillmentRecipient';
export const orderFulfillmentShipmentDetailsSchema = object({
    recipient: [
        'recipient',
        optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    carrier: ['carrier', optional(nullable(string()))],
    shippingNote: ['shipping_note', optional(nullable(string()))],
    shippingType: ['shipping_type', optional(nullable(string()))],
    trackingNumber: ['tracking_number', optional(nullable(string()))],
    trackingUrl: ['tracking_url', optional(nullable(string()))],
    placedAt: ['placed_at', optional(string())],
    inProgressAt: ['in_progress_at', optional(string())],
    packagedAt: ['packaged_at', optional(string())],
    expectedShippedAt: ['expected_shipped_at', optional(nullable(string()))],
    shippedAt: ['shipped_at', optional(string())],
    canceledAt: ['canceled_at', optional(nullable(string()))],
    cancelReason: ['cancel_reason', optional(nullable(string()))],
    failedAt: ['failed_at', optional(string())],
    failureReason: ['failure_reason', optional(nullable(string()))],
});
//# sourceMappingURL=orderFulfillmentShipmentDetails.js.map