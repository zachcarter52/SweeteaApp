import { Schema } from '../schema';
/** Specifies a decimal number range. */
export interface FloatNumberRange {
    /** A decimal value indicating where the range starts. */
    startAt?: string | null;
    /** A decimal value indicating where the range ends. */
    endAt?: string | null;
}
export declare const floatNumberRangeSchema: Schema<FloatNumberRange>;
