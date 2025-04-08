import { Schema } from '../schema';
import { Error } from './error';
/** Represents a response from deleting an order custom attribute definition. */
export interface DeleteOrderCustomAttributeDefinitionResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteOrderCustomAttributeDefinitionResponseSchema: Schema<DeleteOrderCustomAttributeDefinitionResponse>;
