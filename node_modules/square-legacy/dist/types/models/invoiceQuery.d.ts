import { Schema } from '../schema';
import { InvoiceFilter } from './invoiceFilter';
import { InvoiceSort } from './invoiceSort';
/** Describes query criteria for searching invoices. */
export interface InvoiceQuery {
    /** Describes query filters to apply. */
    filter: InvoiceFilter;
    /** Identifies the sort field and sort order. */
    sort?: InvoiceSort;
}
export declare const invoiceQuerySchema: Schema<InvoiceQuery>;
