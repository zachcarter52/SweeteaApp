import { lazy, nullable, object, optional, string } from '../schema';
import { fulfillmentRecipientSchema, } from './fulfillmentRecipient';
export const fulfillmentShipmentDetailsSchema = object({
    recipient: ['recipient', optional(lazy(() => fulfillmentRecipientSchema))],
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
//# sourceMappingURL=fulfillmentShipmentDetails.js.map