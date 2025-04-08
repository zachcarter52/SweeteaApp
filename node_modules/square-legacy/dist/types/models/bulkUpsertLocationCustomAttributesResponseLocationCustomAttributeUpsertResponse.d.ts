import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/** Represents a response for an individual upsert request in a [BulkUpsertLocationCustomAttributes]($e/LocationCustomAttributes/BulkUpsertLocationCustomAttributes) operation. */
export interface BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse {
    /** The ID of the location associated with the custom attribute. */
    locationId?: string;
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred while processing the individual request. */
    errors?: Error[];
}
export declare const bulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponseSchema: Schema<BulkUpsertLocationCustomAttributesResponseLocationCustomAttributeUpsertResponse>;
