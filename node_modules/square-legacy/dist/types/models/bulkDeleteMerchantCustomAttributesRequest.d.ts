import { Schema } from '../schema';
import { BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest } from './bulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest';
/** Represents a [BulkDeleteMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkDeleteMerchantCustomAttributes) request. */
export interface BulkDeleteMerchantCustomAttributesRequest {
    /**
     * The data used to update the `CustomAttribute` objects.
     * The keys must be unique and are used to map to the corresponding response.
     */
    values: Record<string, BulkDeleteMerchantCustomAttributesRequestMerchantCustomAttributeDeleteRequest>;
}
export declare const bulkDeleteMerchantCustomAttributesRequestSchema: Schema<BulkDeleteMerchantCustomAttributesRequest>;
