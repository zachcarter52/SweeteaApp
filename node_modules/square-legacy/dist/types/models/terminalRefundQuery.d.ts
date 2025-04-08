import { Schema } from '../schema';
import { TerminalRefundQueryFilter } from './terminalRefundQueryFilter';
import { TerminalRefundQuerySort } from './terminalRefundQuerySort';
export interface TerminalRefundQuery {
    filter?: TerminalRefundQueryFilter;
    sort?: TerminalRefundQuerySort;
}
export declare const terminalRefundQuerySchema: Schema<TerminalRefundQuery>;
