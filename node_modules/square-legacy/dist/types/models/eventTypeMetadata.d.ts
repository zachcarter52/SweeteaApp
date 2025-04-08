import { Schema } from '../schema';
/** Contains the metadata of a webhook event type. */
export interface EventTypeMetadata {
    /** The event type. */
    eventType?: string;
    /** The API version at which the event type was introduced. */
    apiVersionIntroduced?: string;
    /** The release status of the event type. */
    releaseStatus?: string;
}
export declare const eventTypeMetadataSchema: Schema<EventTypeMetadata>;
