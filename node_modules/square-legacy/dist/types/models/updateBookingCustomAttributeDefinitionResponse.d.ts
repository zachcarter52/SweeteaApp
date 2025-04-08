import { Schema } from '../schema';
import { CustomAttributeDefinition } from './customAttributeDefinition';
import { Error } from './error';
/**
 * Represents an [UpdateBookingCustomAttributeDefinition]($e/BookingCustomAttributes/UpdateBookingCustomAttributeDefinition) response.
 * Either `custom_attribute_definition` or `errors` is present in the response.
 */
export interface UpdateBookingCustomAttributeDefinitionResponse {
    /**
     * Represents a definition for custom attribute values. A custom attribute definition
     * specifies the key, visibility, schema, and other properties for a custom attribute.
     */
    customAttributeDefinition?: CustomAttributeDefinition;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const updateBookingCustomAttributeDefinitionResponseSchema: Schema<UpdateBookingCustomAttributeDefinitionResponse>;
