import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response for an individual upsert request in a [BulkUpsertMerchantCustomAttributes]($e/MerchantCustomAttributes/BulkUpsertMerchantCustomAttributes) operation. */
export interface BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse {
    /** The ID of the merchant associated with the custom attribute. */
    merchantId?: string;
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Error[];
}
export declare const bulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponseSchema: Schema<BulkUpsertMerchantCustomAttributesResponseMerchantCustomAttributeUpsertResponse>;
