import { Schema } from '../schema';
import { EventData } from './eventData';
export interface Event {
    /** The ID of the target merchant associated with the event. */
    merchantId?: string | null;
    /** The ID of the target location associated with the event. */
    locationId?: string | null;
    /** The type of event this represents. */
    type?: string | null;
    /** A unique ID for the event. */
    eventId?: string | null;
    /** Timestamp of when the event was created, in RFC 3339 format. */
    createdAt?: string;
    data?: EventData;
}
export declare const eventSchema: Schema<Event>;
