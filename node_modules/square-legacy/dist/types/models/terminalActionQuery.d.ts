import { Schema } from '../schema';
import { TerminalActionQueryFilter } from './terminalActionQueryFilter';
import { TerminalActionQuerySort } from './terminalActionQuerySort';
export interface TerminalActionQuery {
    filter?: TerminalActionQueryFilter;
    sort?: TerminalActionQuerySort;
}
export declare const terminalActionQuerySchema: Schema<TerminalActionQuery>;
