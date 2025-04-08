import { Schema } from '../schema';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the [RegisterDomain]($e/ApplePay/RegisterDomain) endpoint.
 * Either `errors` or `status` are present in a given response (never both).
 */
export interface RegisterDomainResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** The status of the domain registration. */
    status?: string;
}
export declare const registerDomainResponseSchema: Schema<RegisterDomainResponse>;
