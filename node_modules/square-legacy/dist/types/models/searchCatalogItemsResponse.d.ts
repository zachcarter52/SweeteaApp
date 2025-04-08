import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
import { Error } from './error';
/** Defines the response body returned from the [SearchCatalogItems]($e/Catalog/SearchCatalogItems) endpoint. */
export interface SearchCatalogItemsResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /** Returned items matching the specified query expressions. */
    items?: CatalogObject[];
    /** Pagination token used in the next request to return more of the search result. */
    cursor?: string;
    /** Ids of returned item variations matching the specified query expression. */
    matchedVariationIds?: string[];
}
export declare const searchCatalogItemsResponseSchema: Schema<SearchCatalogItemsResponse>;
