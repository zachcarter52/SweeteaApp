import { boolean, nullable, number, object, optional, string, } from '../schema';
export const listWebhookSubscriptionsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    includeDisabled: ['include_disabled', optional(nullable(boolean()))],
    sortOrder: ['sort_order', optional(string())],
    limit: ['limit', optional(nullable(number()))],
});
//# sourceMappingURL=listWebhookSubscriptionsRequest.js.map