import { Schema } from '../schema';
/**
 * Defines input parameters in a request to the
 * [ChangeBillingAnchorDate]($e/Subscriptions/ChangeBillingAnchorDate) endpoint.
 */
export interface ChangeBillingAnchorDateRequest {
    /** The anchor day for the billing cycle. */
    monthlyBillingAnchorDate?: number | null;
    /**
     * The `YYYY-MM-DD`-formatted date when the scheduled `BILLING_ANCHOR_CHANGE` action takes
     * place on the subscription.
     * When this date is unspecified or falls within the current billing cycle, the billing anchor date
     * is changed immediately.
     */
    effectiveDate?: string | null;
}
export declare const changeBillingAnchorDateRequestSchema: Schema<ChangeBillingAnchorDateRequest>;
