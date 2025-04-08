import { Schema } from '../schema';
/** Defines a sorter used to sort results from [SearchVendors]($e/Vendors/SearchVendors). */
export interface SearchVendorsRequestSort {
    /** The field to sort the returned [Vendor]($m/Vendor) objects by. */
    field?: string;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    order?: string;
}
export declare const searchVendorsRequestSortSchema: Schema<SearchVendorsRequestSort>;
