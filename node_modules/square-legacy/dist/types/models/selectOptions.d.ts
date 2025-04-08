import { Schema } from '../schema';
import { SelectOption } from './selectOption';
export interface SelectOptions {
    /** The title text to display in the select flow on the Terminal. */
    title: string;
    /** The body text to display in the select flow on the Terminal. */
    body: string;
    /** Represents the buttons/options that should be displayed in the select flow on the Terminal. */
    options: SelectOption[];
    selectedOption?: SelectOption;
}
export declare const selectOptionsSchema: Schema<SelectOptions>;
