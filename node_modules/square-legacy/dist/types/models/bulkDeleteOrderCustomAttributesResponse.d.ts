import { Schema } from '../schema';
import { DeleteOrderCustomAttributeResponse } from './deleteOrderCustomAttributeResponse';
import { Error } from './error';
/** Represents a response from deleting one or more order custom attributes. */
export interface BulkDeleteOrderCustomAttributesResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * A map of responses that correspond to individual delete requests. Each response has the same ID
     * as the corresponding request and contains either a `custom_attribute` or an `errors` field.
     */
    values: Record<string, DeleteOrderCustomAttributeResponse>;
}
export declare const bulkDeleteOrderCustomAttributesResponseSchema: Schema<BulkDeleteOrderCustomAttributesResponse>;
