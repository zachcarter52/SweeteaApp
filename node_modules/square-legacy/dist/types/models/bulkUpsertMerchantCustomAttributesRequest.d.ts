import { Schema } from '../schema';
import { BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest } from './bulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest';
/** Represents a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes) request. */
export interface BulkUpsertMerchantCustomAttributesRequest {
    /**
     * A map containing 1 to 25 individual upsert requests. For each request, provide an
     * arbitrary ID that is unique for this `BulkUpsertMerchantCustomAttributes` request and the
     * information needed to create or update a custom attribute.
     */
    values: Record<string, BulkUpsertMerchantCustomAttributesRequestMerchantCustomAttributeUpsertRequest>;
}
export declare const bulkUpsertMerchantCustomAttributesRequestSchema: Schema<BulkUpsertMerchantCustomAttributesRequest>;
