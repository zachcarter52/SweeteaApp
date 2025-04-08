import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents a [DeleteCustomerCustomAttribute]($e/CustomerCustomAttributes/DeleteCustomerCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteCustomerCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteCustomerCustomAttributeResponseSchema: Schema<DeleteCustomerCustomAttributeResponse>;
