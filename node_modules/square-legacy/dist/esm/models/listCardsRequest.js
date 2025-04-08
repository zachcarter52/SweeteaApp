import { boolean, nullable, object, optional, string } from '../schema';
export const listCardsRequestSchema = object({
    cursor: ['cursor', optional(nullable(string()))],
    customerId: ['customer_id', optional(nullable(string()))],
    includeDisabled: ['include_disabled', optional(nullable(boolean()))],
    referenceId: ['reference_id', optional(nullable(string()))],
    sortOrder: ['sort_order', optional(string())],
});
//# sourceMappingURL=listCardsRequest.js.map