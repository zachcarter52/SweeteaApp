import { Schema } from '../schema';
/** Additional details about Clearpay payments. */
export interface ClearpayDetails {
    /** Email address on the buyer's Clearpay account. */
    emailAddress?: string | null;
}
export declare const clearpayDetailsSchema: Schema<ClearpayDetails>;
