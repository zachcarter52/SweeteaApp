import { Schema } from '../schema';
import { Error } from './error';
import { PaymentLink } from './paymentLink';
export interface UpdatePaymentLinkResponse {
    /** Any errors that occurred when updating the payment link. */
    errors?: Error[];
    paymentLink?: PaymentLink;
}
export declare const updatePaymentLinkResponseSchema: Schema<UpdatePaymentLinkResponse>;
