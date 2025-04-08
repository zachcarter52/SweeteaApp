import { Schema } from '../schema';
export interface SelectOption {
    /** The reference id for the option. */
    referenceId: string;
    /** The title text that displays in the select option button. */
    title: string;
}
export declare const selectOptionSchema: Schema<SelectOption>;
