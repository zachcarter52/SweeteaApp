import { Schema } from '../schema';
import { PhaseInput } from './phaseInput';
/**
 * Defines input parameters in a call to the
 * [SwapPlan]($e/Subscriptions/SwapPlan) endpoint.
 */
export interface SwapPlanRequest {
    /**
     * The ID of the new subscription plan variation.
     * This field is required.
     */
    newPlanVariationId?: string | null;
    /** A list of PhaseInputs, to pass phase-specific information used in the swap. */
    phases?: PhaseInput[] | null;
}
export declare const swapPlanRequestSchema: Schema<SwapPlanRequest>;
