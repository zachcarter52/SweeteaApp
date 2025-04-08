import { Schema } from '../schema';
import { Error } from './error';
/** Represents a response from a delete request containing error messages if there are any. */
export interface DeleteCustomerCustomAttributeDefinitionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteCustomerCustomAttributeDefinitionResponseSchema: Schema<DeleteCustomerCustomAttributeDefinitionResponse>;
