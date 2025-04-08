import { Schema } from '../schema';
export interface CollectedData {
    /** The buyer's input text. */
    inputText?: string;
}
export declare const collectedDataSchema: Schema<CollectedData>;
