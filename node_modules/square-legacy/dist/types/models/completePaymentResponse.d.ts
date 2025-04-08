import { Schema } from '../schema';
import { Error } from './error';
import { Payment } from './payment';
/** Defines the response returned by[CompletePayment]($e/Payments/CompletePayment). */
export interface CompletePaymentResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents a payment processed by the Square API. */
    payment?: Payment;
}
export declare const completePaymentResponseSchema: Schema<CompletePaymentResponse>;
