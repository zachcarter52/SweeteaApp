import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { orderFulfillmentRecipientSchema, } from './orderFulfillmentRecipient';
export const orderFulfillmentDeliveryDetailsSchema = object({
    recipient: [
        'recipient',
        optional(lazy(() => orderFulfillmentRecipientSchema)),
    ],
    scheduleType: ['schedule_type', optional(string())],
    placedAt: ['placed_at', optional(string())],
    deliverAt: ['deliver_at', optional(nullable(string()))],
    prepTimeDuration: ['prep_time_duration', optional(nullable(string()))],
    deliveryWindowDuration: [
        'delivery_window_duration',
        optional(nullable(string())),
    ],
    note: ['note', optional(nullable(string()))],
    completedAt: ['completed_at', optional(nullable(string()))],
    inProgressAt: ['in_progress_at', optional(string())],
    rejectedAt: ['rejected_at', optional(string())],
    readyAt: ['ready_at', optional(string())],
    deliveredAt: ['delivered_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(nullable(string()))],
    courierPickupAt: ['courier_pickup_at', optional(nullable(string()))],
    courierPickupWindowDuration: [
        'courier_pickup_window_duration',
        optional(nullable(string())),
    ],
    isNoContactDelivery: [
        'is_no_contact_delivery',
        optional(nullable(boolean())),
    ],
    dropoffNotes: ['dropoff_notes', optional(nullable(string()))],
    courierProviderName: [
        'courier_provider_name',
        optional(nullable(string())),
    ],
    courierSupportPhoneNumber: [
        'courier_support_phone_number',
        optional(nullable(string())),
    ],
    squareDeliveryId: ['square_delivery_id', optional(nullable(string()))],
    externalDeliveryId: ['external_delivery_id', optional(nullable(string()))],
    managedDelivery: ['managed_delivery', optional(nullable(boolean()))],
});
//# sourceMappingURL=orderFulfillmentDeliveryDetails.js.map