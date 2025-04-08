import { Schema } from '../schema';
import { Error } from './error';
import { TerminalRefund } from './terminalRefund';
export interface CancelTerminalRefundResponse {
    /** Information about errors encountered during the request. */
    errors?: Error[];
    /** Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds. */
    refund?: TerminalRefund;
}
export declare const cancelTerminalRefundResponseSchema: Schema<CancelTerminalRefundResponse>;
