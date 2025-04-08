import { Schema } from '../schema';
import { TerminalAction } from './terminalAction';
export interface CreateTerminalActionRequest {
    /**
     * A unique string that identifies this `CreateAction` request. Keys can be any valid string
     * but must be unique for every `CreateAction` request.
     * See [Idempotency keys](https://developer.squareup.com/docs/build-basics/common-api-patterns/idempotency) for more
     * information.
     */
    idempotencyKey: string;
    /** Represents an action processed by the Square Terminal. */
    action: TerminalAction;
}
export declare const createTerminalActionRequestSchema: Schema<CreateTerminalActionRequest>;
