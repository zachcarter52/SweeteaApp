import { Schema } from '../schema';
/** The query filter to return the search result whose named attribute values are prefixed by the specified attribute value. */
export interface CatalogQueryPrefix {
    /** The name of the attribute to be searched. */
    attributeName: string;
    /** The desired prefix of the search attribute value. */
    attributePrefix: string;
}
export declare const catalogQueryPrefixSchema: Schema<CatalogQueryPrefix>;
