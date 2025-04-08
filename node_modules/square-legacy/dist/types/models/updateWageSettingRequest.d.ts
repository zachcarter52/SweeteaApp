import { Schema } from '../schema';
import { WageSetting } from './wageSetting';
/** Represents an update request for the `WageSetting` object describing a `TeamMember`. */
export interface UpdateWageSettingRequest {
    /**
     * Represents information about the overtime exemption status, job assignments, and compensation
     * for a [team member]($m/TeamMember).
     */
    wageSetting: WageSetting;
}
export declare const updateWageSettingRequestSchema: Schema<UpdateWageSettingRequest>;
