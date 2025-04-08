import { Schema } from '../schema';
/** The query filter to return the items containing the specified item option IDs. */
export interface CatalogQueryItemsForItemOptions {
    /**
     * A set of `CatalogItemOption` IDs to be used to find associated
     * `CatalogItem`s. All Items that contain all of the given Item Options (in any order)
     * will be returned.
     */
    itemOptionIds?: string[] | null;
}
export declare const catalogQueryItemsForItemOptionsSchema: Schema<CatalogQueryItemsForItemOptions>;
