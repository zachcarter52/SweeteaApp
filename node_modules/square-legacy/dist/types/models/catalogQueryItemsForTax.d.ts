import { Schema } from '../schema';
/** The query filter to return the items containing the specified tax IDs. */
export interface CatalogQueryItemsForTax {
    /** A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s. */
    taxIds: string[];
}
export declare const catalogQueryItemsForTaxSchema: Schema<CatalogQueryItemsForTax>;
