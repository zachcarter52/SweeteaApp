import { Schema } from '../schema';
import { BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse } from './bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse';
import { Error } from './error';
/**
 * Represents a [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertLocationCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual upsert requests. Each response has the
     * same ID as the corresponding request and contains either a `location_id` and `custom_attribute` or an `errors` field.
     */
    values?: Record<string, BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkUpsertLocationCustomAttributesResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponse>;
