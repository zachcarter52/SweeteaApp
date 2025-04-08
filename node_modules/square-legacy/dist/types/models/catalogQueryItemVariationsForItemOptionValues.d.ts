import { Schema } from '../schema';
/** The query filter to return the item variations containing the specified item option value IDs. */
export interface CatalogQueryItemVariationsForItemOptionValues {
    /**
     * A set of `CatalogItemOptionValue` IDs to be used to find associated
     * `CatalogItemVariation`s. All ItemVariations that contain all of the given
     * Item Option Values (in any order) will be returned.
     */
    itemOptionValueIds?: string[] | null;
}
export declare const catalogQueryItemVariationsForItemOptionValuesSchema: Schema<CatalogQueryItemVariationsForItemOptionValues>;
