import { Schema } from '../schema';
import { Error } from './error';
import { Site } from './site';
/** Represents a `ListSites` response. The response can include either `sites` or `errors`. */
export interface ListSitesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The sites that belong to the seller. */
    sites?: Site[];
}
export declare const listSitesResponseSchema: Schema<ListSitesResponse>;
