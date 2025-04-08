import { Schema } from '../schema';
import { Error } from './error';
import { TerminalAction } from './terminalAction';
export interface CancelTerminalActionResponse {
    /** Information on errors encountered during the request. */
    errors?: Error[];
    /** Represents an action processed by the Square Terminal. */
    action?: TerminalAction;
}
export declare const cancelTerminalActionResponseSchema: Schema<CancelTerminalActionResponse>;
