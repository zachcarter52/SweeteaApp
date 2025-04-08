import { Schema } from '../schema';
import { CustomAttribute } from './customAttribute';
import { Error } from './error';
/**
 * Represents a [RetrieveLocationCustomAttribute]($e/LocationCustomAttributes/RetrieveLocationCustomAttribute) response.
 * Either `custom_attribute_definition` or `errors` is present in the response.
 */
export interface RetrieveLocationCustomAttributeResponse {
    /**
     * A custom attribute value. Each custom attribute value has a corresponding
     * `CustomAttributeDefinition` object.
     */
    customAttribute?: CustomAttribute;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveLocationCustomAttributeResponseSchema: Schema<RetrieveLocationCustomAttributeResponse>;
