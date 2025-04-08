import { Schema } from '../schema';
import { BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse } from './bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse';
import { Error } from './error';
/**
 * Represents a [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual upsert request.
 */
export interface BulkUpsertCustomerCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual upsert requests. Each response has the
     * same ID as the corresponding request and contains either a `customer_id` and `custom_attribute` or an `errors` field.
     */
    values?: Record<string, BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkUpsertCustomerCustomAttributesResponseSchema: Schema<BulkUpsertCustomerCustomAttributesResponse>;
