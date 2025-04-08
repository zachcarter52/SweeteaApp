import { Schema } from '../schema';
import { Error } from './error';
import { PaymentLink } from './paymentLink';
export interface RetrievePaymentLinkResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    paymentLink?: PaymentLink;
}
export declare const retrievePaymentLinkResponseSchema: Schema<RetrievePaymentLinkResponse>;
