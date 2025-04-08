import { Schema } from '../schema';
import { SubscriptionPhase } from './subscriptionPhase';
/**
 * Describes a subscription plan variation. A subscription plan variation represents how the subscription for a product or service is sold.
 * For more information, see [Subscription Plans and Variations](https://developer.squareup.com/docs/subscriptions-api/plans-and-variations).
 */
export interface CatalogSubscriptionPlanVariation {
    /** The name of the plan variation. */
    name: string;
    /** A list containing each [SubscriptionPhase](entity:SubscriptionPhase) for this plan variation. */
    phases: SubscriptionPhase[];
    /** The id of the subscription plan, if there is one. */
    subscriptionPlanId?: string | null;
    /** The day of the month the billing period starts. */
    monthlyBillingAnchorDate?: bigint | null;
    /** Whether bills for this plan variation can be split for proration. */
    canProrate?: boolean | null;
    /**
     * The ID of a "successor" plan variation to this one. If the field is set, and this object is disabled at all
     * locations, it indicates that this variation is deprecated and the object identified by the successor ID be used in
     * its stead.
     */
    successorPlanVariationId?: string | null;
}
export declare const catalogSubscriptionPlanVariationSchema: Schema<CatalogSubscriptionPlanVariation>;
