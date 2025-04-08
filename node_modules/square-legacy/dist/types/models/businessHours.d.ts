import { Schema } from '../schema';
import { BusinessHoursPeriod } from './businessHoursPeriod';
/** The hours of operation for a location. */
export interface BusinessHours {
    /** The list of time periods during which the business is open. There can be at most 10 periods per day. */
    periods?: BusinessHoursPeriod[] | null;
}
export declare const businessHoursSchema: Schema<BusinessHours>;
