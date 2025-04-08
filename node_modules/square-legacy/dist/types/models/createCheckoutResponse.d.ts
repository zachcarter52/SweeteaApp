import { Schema } from '../schema';
import { Checkout } from './checkout';
import { Error } from './error';
/**
 * Defines the fields that are included in the response body of
 * a request to the `CreateCheckout` endpoint.
 */
export interface CreateCheckoutResponse {
    /**
     * Square Checkout lets merchants accept online payments for supported
     * payment types using a checkout workflow hosted on squareup.com.
     */
    checkout?: Checkout;
    /** Any errors that occurred during the request. */
    errors?: Error[];
}
export declare const createCheckoutResponseSchema: Schema<CreateCheckoutResponse>;
