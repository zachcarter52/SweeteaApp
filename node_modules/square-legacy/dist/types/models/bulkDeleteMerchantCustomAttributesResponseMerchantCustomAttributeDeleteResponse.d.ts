import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents an individual delete response in a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes)
 * request.
 */
export interface BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse {
    /** Errors that occurred while processing the individual MerchantCustomAttributeDeleteRequest request */
    errors?: Error[];
}
export declare const bulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponseSchema: Schema<BulkDeleteMerchantCustomAttributesResponseMerchantCustomAttributeDeleteResponse>;
