import { Schema } from '../schema';
import { TerminalCheckoutQueryFilter } from './terminalCheckoutQueryFilter';
import { TerminalCheckoutQuerySort } from './terminalCheckoutQuerySort';
export interface TerminalCheckoutQuery {
    filter?: TerminalCheckoutQueryFilter;
    sort?: TerminalCheckoutQuerySort;
}
export declare const terminalCheckoutQuerySchema: Schema<TerminalCheckoutQuery>;
