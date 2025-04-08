import { Schema } from '../schema';
import { BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse } from './bulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse';
import { Error } from './error';
/**
 * Represents a [BulkDeleteLocationCustomAttributes]($e/LocationCustomAttributes/BulkDeleteLocationCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual delete request.
 */
export interface BulkDeleteLocationCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual delete requests. Each response has the
     * same key as the corresponding request.
     */
    values: Record<string, BulkDeleteLocationCustomAttributesResponseLocationCustomAttributeDeleteResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkDeleteLocationCustomAttributesResponseSchema: Schema<BulkDeleteLocationCustomAttributesResponse>;
