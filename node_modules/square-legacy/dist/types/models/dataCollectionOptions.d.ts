import { Schema } from '../schema';
import { CollectedData } from './collectedData';
export interface DataCollectionOptions {
    /** The title text to display in the data collection flow on the Terminal. */
    title: string;
    /**
     * The body text to display under the title in the data collection screen flow on the
     * Terminal.
     */
    body: string;
    /** Describes the input type of the data. */
    inputType: string;
    collectedData?: CollectedData;
}
export declare const dataCollectionOptionsSchema: Schema<DataCollectionOptions>;
