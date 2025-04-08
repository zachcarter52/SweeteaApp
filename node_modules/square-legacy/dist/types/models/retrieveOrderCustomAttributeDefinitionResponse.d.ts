import { Schema } from '../schema';
import { CustomAttributeDefinition } from './customAttributeDefinition';
import { Error } from './error';
/** Represents a response from getting an order custom attribute definition. */
export interface RetrieveOrderCustomAttributeDefinitionResponse {
    /**
     * Represents a definition for custom attribute values. A custom attribute definition
     * specifies the key, visibility, schema, and other properties for a custom attribute.
     */
    customAttributeDefinition?: CustomAttributeDefinition;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const retrieveOrderCustomAttributeDefinitionResponseSchema: Schema<RetrieveOrderCustomAttributeDefinitionResponse>;
