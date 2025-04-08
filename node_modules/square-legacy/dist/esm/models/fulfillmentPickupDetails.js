import { boolean, lazy, nullable, object, optional, string, } from '../schema';
import { fulfillmentPickupDetailsCurbsidePickupDetailsSchema, } from './fulfillmentPickupDetailsCurbsidePickupDetails';
import { fulfillmentRecipientSchema, } from './fulfillmentRecipient';
export const fulfillmentPickupDetailsSchema = object({
    recipient: ['recipient', optional(lazy(() => fulfillmentRecipientSchema))],
    expiresAt: ['expires_at', optional(nullable(string()))],
    autoCompleteDuration: [
        'auto_complete_duration',
        optional(nullable(string())),
    ],
    scheduleType: ['schedule_type', optional(string())],
    pickupAt: ['pickup_at', optional(nullable(string()))],
    pickupWindowDuration: [
        'pickup_window_duration',
        optional(nullable(string())),
    ],
    prepTimeDuration: ['prep_time_duration', optional(nullable(string()))],
    note: ['note', optional(nullable(string()))],
    placedAt: ['placed_at', optional(string())],
    acceptedAt: ['accepted_at', optional(string())],
    rejectedAt: ['rejected_at', optional(string())],
    readyAt: ['ready_at', optional(string())],
    expiredAt: ['expired_at', optional(string())],
    pickedUpAt: ['picked_up_at', optional(string())],
    canceledAt: ['canceled_at', optional(string())],
    cancelReason: ['cancel_reason', optional(nullable(string()))],
    isCurbsidePickup: ['is_curbside_pickup', optional(nullable(boolean()))],
    curbsidePickupDetails: [
        'curbside_pickup_details',
        optional(lazy(() => fulfillmentPickupDetailsCurbsidePickupDetailsSchema)),
    ],
});
//# sourceMappingURL=fulfillmentPickupDetails.js.map