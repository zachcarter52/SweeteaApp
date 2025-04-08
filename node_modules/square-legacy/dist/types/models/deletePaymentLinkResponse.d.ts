import { Schema } from '../schema';
import { Error } from './error';
export interface DeletePaymentLinkResponse {
    errors?: Error[];
    /** The ID of the link that is deleted. */
    id?: string;
    /**
     * The ID of the order that is canceled. When a payment link is deleted, Square updates the
     * the `state` (of the order that the checkout link created) to CANCELED.
     */
    cancelledOrderId?: string;
}
export declare const deletePaymentLinkResponseSchema: Schema<DeletePaymentLinkResponse>;
