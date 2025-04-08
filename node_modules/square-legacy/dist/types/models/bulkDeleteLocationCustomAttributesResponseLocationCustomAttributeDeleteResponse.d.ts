import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents an individual delete response in a [BulkDeleteLocationCustomAttributes]($e/LocationCustomAttributes/BulkDeleteLocationCustomAttributes)
 * request.
 */
export interface BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse {
    /** The ID of the location associated with the custom attribute. */
    locationId?: string;
    /** Errors that occurred while processing the individual LocationCustomAttributeDeleteRequest request */
    errors?: Error[];
}
export declare const bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponseSchema: Schema<BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>;
