import { Schema } from '../schema';
/** Identifies the sort field and sort order. */
export interface InvoiceSort {
    /** The field to use for sorting. */
    field: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    order?: string;
}
export declare const invoiceSortSchema: Schema<InvoiceSort>;
