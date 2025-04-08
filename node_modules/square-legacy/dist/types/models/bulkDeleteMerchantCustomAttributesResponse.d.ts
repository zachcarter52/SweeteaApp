import { Schema } from '../schema';
import { BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse } from './bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse';
import { Error } from './error';
/**
 * Represents a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes) response,
 * which contains a map of responses that each corresponds to an individual delete request.
 */
export interface BulkDeleteMerchantCustomAttributesResponse {
    /**
     * A map of responses that correspond to individual delete requests. Each response has the
     * same key as the corresponding request.
     */
    values: Record<string, BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const bulkDeleteMerchantCustomAttributesResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponse>;
