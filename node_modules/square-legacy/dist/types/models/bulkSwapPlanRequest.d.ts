import { Schema } from '../schema';
/**
 * Defines input parameters in a call to the
 * [BulkSwapPlan]($e/Subscriptions/BulkSwapPlan) endpoint.
 */
export interface BulkSwapPlanRequest {
    /**
     * The ID of the new subscription plan variation.
     * This field is required.
     */
    newPlanVariationId: string;
    /**
     * The ID of the plan variation whose subscriptions should be swapped. Active subscriptions
     * using this plan variation will be subscribed to the new plan variation on their next billing
     * day.
     */
    oldPlanVariationId: string;
    /** The ID of the location to associate with the swapped subscriptions. */
    locationId: string;
}
export declare const bulkSwapPlanRequestSchema: Schema<BulkSwapPlanRequest>;
