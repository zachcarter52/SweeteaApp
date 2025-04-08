import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response for an individual upsert request in a [BulkUpsertCustomerCustomAttributes]($e/CustomerCustomAttributes/BulkUpsertCustomerCustomAttributes) operation. */
export interface BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse {
    /** The ID of the customer profile associated with the custom attribute. */
    customerId?: string;
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Error[];
}
export declare const bulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponseSchema: Schema<BulkUpsertCustomerCustomAttributesResponseCustomerCustomAttributeUpsertResponse>;
