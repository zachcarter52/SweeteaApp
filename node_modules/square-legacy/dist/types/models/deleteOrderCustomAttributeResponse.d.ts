import { Schema } from '../schema';
import { Error } from './error';
/** Represents a response from deleting an order custom attribute. */
export interface DeleteOrderCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteOrderCustomAttributeResponseSchema: Schema<DeleteOrderCustomAttributeResponse>;
