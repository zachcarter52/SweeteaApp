import { Schema } from '../schema';
import { Device } from './device';
import { Error } from './error';
export interface ListDevicesResponse {
    /** Information about errors that occurred during the request. */
    errors?: Error[];
    /** The requested list of `Device` objects. */
    devices?: Device[];
    /**
     * The pagination cursor to be used in a subsequent request. If empty,
     * this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string;
}
export declare const listDevicesResponseSchema: Schema<ListDevicesResponse>;
