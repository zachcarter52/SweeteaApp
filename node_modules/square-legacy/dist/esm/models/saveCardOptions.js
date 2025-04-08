import { nullable, object, optional, string } from '../schema';
export const saveCardOptionsSchema = object({
    customerId: ['customer_id', string()],
    cardId: ['card_id', optional(string())],
    referenceId: ['reference_id', optional(nullable(string()))],
});
//# sourceMappingURL=saveCardOptions.js.map