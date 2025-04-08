import { boolean, nullable, object, optional, string } from '../schema';
export const receiptOptionsSchema = object({
    paymentId: ['payment_id', string()],
    printOnly: ['print_only', optional(nullable(boolean()))],
    isDuplicate: ['is_duplicate', optional(nullable(boolean()))],
});
//# sourceMappingURL=receiptOptions.js.map