import { Schema } from '../schema';
import { Phase } from './phase';
/** Represents an action as a pending change to a subscription. */
export interface SubscriptionAction {
    /** The ID of an action scoped to a subscription. */
    id?: string;
    /** Supported types of an action as a pending change to a subscription. */
    type?: string;
    /** The `YYYY-MM-DD`-formatted date when the action occurs on the subscription. */
    effectiveDate?: string | null;
    /** The new billing anchor day value, for a `CHANGE_BILLING_ANCHOR_DATE` action. */
    monthlyBillingAnchorDate?: number | null;
    /** A list of Phases, to pass phase-specific information used in the swap. */
    phases?: Phase[] | null;
    /** The target subscription plan variation that a subscription switches to, for a `SWAP_PLAN` action. */
    newPlanVariationId?: string | null;
}
export declare const subscriptionActionSchema: Schema<SubscriptionAction>;
