import { Schema } from '../schema';
import { Error } from './error';
/** Additional details about Square Account payments. */
export interface SquareAccountDetails {
    /** Unique identifier for the payment source used for this payment. */
    paymentSourceToken?: string | null;
    /** Information about errors encountered during the request. */
    errors?: Error[] | null;
}
export declare const squareAccountDetailsSchema: Schema<SquareAccountDetails>;
