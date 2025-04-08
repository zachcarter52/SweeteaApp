import { Schema } from '../schema';
/** The range of a number value between the specified lower and upper bounds. */
export interface Range {
    /**
     * The lower bound of the number range. At least one of `min` or `max` must be specified.
     * If unspecified, the results will have no minimum value.
     */
    min?: string | null;
    /**
     * The upper bound of the number range. At least one of `min` or `max` must be specified.
     * If unspecified, the results will have no maximum value.
     */
    max?: string | null;
}
export declare const rangeSchema: Schema<Range>;
