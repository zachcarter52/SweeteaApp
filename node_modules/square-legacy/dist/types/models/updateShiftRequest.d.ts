import { Schema } from '../schema';
import { Shift } from './shift';
/** A request to update a `Shift` object. */
export interface UpdateShiftRequest {
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     * for an employee. This might include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift: Shift;
}
export declare const updateShiftRequestSchema: Schema<UpdateShiftRequest>;
