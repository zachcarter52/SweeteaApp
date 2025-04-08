import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents a [DeleteLocationCustomAttribute]($e/LocationCustomAttributes/DeleteLocationCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteLocationCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteLocationCustomAttributeResponseSchema: Schema<DeleteLocationCustomAttributeResponse>;
