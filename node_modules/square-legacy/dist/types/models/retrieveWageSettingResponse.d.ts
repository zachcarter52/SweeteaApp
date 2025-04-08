import { Schema } from '../schema';
import { Error } from './error';
import { WageSetting } from './wageSetting';
/** Represents a response from a retrieve request containing the specified `WageSetting` object or error messages. */
export interface RetrieveWageSettingResponse {
    /**
     * Represents information about the overtime exemption status, job assignments, and compensation
     * for a [team member]($m/TeamMember).
     */
    wageSetting?: WageSetting;
    /** The errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveWageSettingResponseSchema: Schema<RetrieveWageSettingResponse>;
