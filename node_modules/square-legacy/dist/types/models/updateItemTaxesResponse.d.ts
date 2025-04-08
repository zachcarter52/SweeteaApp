import { Schema } from '../schema';
import { Error } from './error';
export interface UpdateItemTaxesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this update in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`. */
    updatedAt?: string;
}
export declare const updateItemTaxesResponseSchema: Schema<UpdateItemTaxesResponse>;
