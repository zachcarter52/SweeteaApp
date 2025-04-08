import { Schema } from '../schema';
import { CustomerFilter } from './customerFilter';
import { CustomerSort } from './customerSort';
/** Represents filtering and sorting criteria for a [SearchCustomers]($e/Customers/SearchCustomers) request. */
export interface CustomerQuery {
    /**
     * Represents the filtering criteria in a [search query]($m/CustomerQuery) that defines how to filter
     * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
     */
    filter?: CustomerFilter;
    /**
     * Represents the sorting criteria in a [search query]($m/CustomerQuery) that defines how to sort
     * customer profiles returned in [SearchCustomers]($e/Customers/SearchCustomers) results.
     */
    sort?: CustomerSort;
}
export declare const customerQuerySchema: Schema<CustomerQuery>;
