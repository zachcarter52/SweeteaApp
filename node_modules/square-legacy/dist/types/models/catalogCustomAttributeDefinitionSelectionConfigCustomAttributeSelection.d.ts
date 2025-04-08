import { Schema } from '../schema';
/** A named selection for this `SELECTION`-type custom attribute definition. */
export interface CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection {
    /** Unique ID set by Square. */
    uid?: string | null;
    /** Selection name, unique within `allowed_selections`. */
    name: string;
}
export declare const catalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelectionSchema: Schema<CatalogCustomAttributeDefinitionSelectionConfigCustomAttributeSelection>;
