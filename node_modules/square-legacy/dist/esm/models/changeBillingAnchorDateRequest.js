import { nullable, number, object, optional, string } from '../schema';
export const changeBillingAnchorDateRequestSchema = object({
    monthlyBillingAnchorDate: [
        'monthly_billing_anchor_date',
        optional(nullable(number())),
    ],
    effectiveDate: ['effective_date', optional(nullable(string()))],
});
//# sourceMappingURL=changeBillingAnchorDateRequest.js.map