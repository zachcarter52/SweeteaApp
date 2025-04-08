import { array, boolean, nullable, object, optional, string, } from '../schema';
export const webhookSubscriptionSchema = object({
    id: ['id', optional(string())],
    name: ['name', optional(nullable(string()))],
    enabled: ['enabled', optional(nullable(boolean()))],
    eventTypes: ['event_types', optional(nullable(array(string())))],
    notificationUrl: ['notification_url', optional(nullable(string()))],
    apiVersion: ['api_version', optional(nullable(string()))],
    signatureKey: ['signature_key', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
});
//# sourceMappingURL=webhookSubscription.js.map