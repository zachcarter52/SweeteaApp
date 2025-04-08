import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines output parameters in a response of the
 * [BulkSwapPlan]($e/Subscriptions/BulkSwapPlan) endpoint.
 */
export interface BulkSwapPlanResponse {
    /** Errors encountered during the request. */
    errors?: Error[];
    /** The number of affected subscriptions. */
    affectedSubscriptions?: number;
}
export declare const bulkSwapPlanResponseSchema: Schema<BulkSwapPlanResponse>;
