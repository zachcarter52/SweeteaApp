import { Schema } from '../schema';
import { TerminalRefund } from './terminalRefund';
export interface CreateTerminalRefundRequest {
    /**
     * A unique string that identifies this `CreateRefund` request. Keys can be any valid string but
     * must be unique for every `CreateRefund` request.
     * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more information.
     */
    idempotencyKey: string;
    /** Represents a payment refund processed by the Square Terminal. Only supports Interac (Canadian debit network) payment refunds. */
    refund?: TerminalRefund;
}
export declare const createTerminalRefundRequestSchema: Schema<CreateTerminalRefundRequest>;
