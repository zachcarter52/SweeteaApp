import { Schema } from '../schema';
import { Error } from './error';
/** A response returned by the API call. */
export interface DeleteLoyaltyRewardResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteLoyaltyRewardResponseSchema: Schema<DeleteLoyaltyRewardResponse>;
