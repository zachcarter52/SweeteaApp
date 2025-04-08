import { Schema } from '../schema';
import { Shift } from './shift';
/** Represents a request to create a `Shift`. */
export interface CreateShiftRequest {
    /** A unique string value to ensure the idempotency of the operation. */
    idempotencyKey?: string;
    /**
     * A record of the hourly rate, start, and end times for a single work shift
     * for an employee. This might include a record of the start and end times for breaks
     * taken during the shift.
     */
    shift: Shift;
}
export declare const createShiftRequestSchema: Schema<CreateShiftRequest>;
