import { Schema } from '../schema';
import { Error } from './error';
import { Payment } from './payment';
/** Defines the response returned by [CancelPayment]($e/Payments/CancelPayment). */
export interface CancelPaymentResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents a payment processed by the Square API. */
    payment?: Payment;
}
export declare const cancelPaymentResponseSchema: Schema<CancelPaymentResponse>;
