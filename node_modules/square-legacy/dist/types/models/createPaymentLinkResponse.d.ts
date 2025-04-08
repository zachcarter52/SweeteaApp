import { Schema } from '../schema';
import { Error } from './error';
import { PaymentLink } from './paymentLink';
import { PaymentLinkRelatedResources } from './paymentLinkRelatedResources';
export interface CreatePaymentLinkResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    paymentLink?: PaymentLink;
    relatedResources?: PaymentLinkRelatedResources;
}
export declare const createPaymentLinkResponseSchema: Schema<CreatePaymentLinkResponse>;
