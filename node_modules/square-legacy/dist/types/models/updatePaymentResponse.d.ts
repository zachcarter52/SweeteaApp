import { Schema } from '../schema';
import { Error } from './error';
import { Payment } from './payment';
/**
 * Defines the response returned by
 * [UpdatePayment]($e/Payments/UpdatePayment).
 */
export interface UpdatePaymentResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Represents a payment processed by the Square API. */
    payment?: Payment;
}
export declare const updatePaymentResponseSchema: Schema<UpdatePaymentResponse>;
