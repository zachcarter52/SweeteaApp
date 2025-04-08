import { Schema } from '../schema';
import { WorkweekConfig } from './workweekConfig';
/** A request to update a `WorkweekConfig` object. */
export interface UpdateWorkweekConfigRequest {
    /**
     * Sets the day of the week and hour of the day that a business starts a
     * workweek. This is used to calculate overtime pay.
     */
    workweekConfig: WorkweekConfig;
}
export declare const updateWorkweekConfigRequestSchema: Schema<UpdateWorkweekConfigRequest>;
