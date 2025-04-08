import { Schema } from '../schema';
import { Error } from './error';
/**
 * Represents a [DeleteMerchantCustomAttribute]($e/MerchantCustomAttributes/DeleteMerchantCustomAttribute) response.
 * Either an empty object `{}` (for a successful deletion) or `errors` is present in the response.
 */
export interface DeleteMerchantCustomAttributeResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const deleteMerchantCustomAttributeResponseSchema: Schema<DeleteMerchantCustomAttributeResponse>;
