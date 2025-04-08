import { Schema } from '../schema';
import { Error } from './error';
import { WageSetting } from './wageSetting';
/**
 * Represents a response from an update request containing the updated `WageSetting` object
 * or error messages.
 */
export interface UpdateWageSettingResponse {
    /**
     * Represents information about the overtime exemption status, job assignments, and compensation
     * for a [team member]($m/TeamMember).
     */
    wageSetting?: WageSetting;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const updateWageSettingResponseSchema: Schema<UpdateWageSettingResponse>;
