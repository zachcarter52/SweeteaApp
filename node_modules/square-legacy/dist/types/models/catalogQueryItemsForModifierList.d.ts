import { Schema } from '../schema';
/** The query filter to return the items containing the specified modifier list IDs. */
export interface CatalogQueryItemsForModifierList {
    /** A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s. */
    modifierListIds: string[];
}
export declare const catalogQueryItemsForModifierListSchema: Schema<CatalogQueryItemsForModifierList>;
