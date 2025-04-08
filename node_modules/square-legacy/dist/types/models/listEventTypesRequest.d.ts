import { Schema } from '../schema';
/** Lists all event types that can be subscribed to. */
export interface ListEventTypesRequest {
    /** The API version for which to list event types. Setting this field overrides the default version used by the application. */
    apiVersion?: string | null;
}
export declare const listEventTypesRequestSchema: Schema<ListEventTypesRequest>;
