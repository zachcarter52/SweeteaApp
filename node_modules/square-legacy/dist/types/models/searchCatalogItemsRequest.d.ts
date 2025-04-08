import { Schema } from '../schema';
import { CustomAttributeFilter } from './customAttributeFilter';
/** Defines the request body for the [SearchCatalogItems]($e/Catalog/SearchCatalogItems) endpoint. */
export interface SearchCatalogItemsRequest {
    /**
     * The text filter expression to return items or item variations containing specified text in
     * the `name`, `description`, or `abbreviation` attribute value of an item, or in
     * the `name`, `sku`, or `upc` attribute value of an item variation.
     */
    textFilter?: string;
    /** The category id query expression to return items containing the specified category IDs. */
    categoryIds?: string[];
    /**
     * The stock-level query expression to return item variations with the specified stock levels.
     * See [SearchCatalogItemsRequestStockLevel](#type-searchcatalogitemsrequeststocklevel) for possible values
     */
    stockLevels?: string[];
    /** The enabled-location query expression to return items and item variations having specified enabled locations. */
    enabledLocationIds?: string[];
    /** The pagination token, returned in the previous response, used to fetch the next batch of pending results. */
    cursor?: string;
    /** The maximum number of results to return per page. The default value is 100. */
    limit?: number;
    /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
    sortOrder?: string;
    /** The product types query expression to return items or item variations having the specified product types. */
    productTypes?: string[];
    /**
     * The customer-attribute filter to return items or item variations matching the specified
     * custom attribute expressions. A maximum number of 10 custom attribute expressions are supported in
     * a single call to the [SearchCatalogItems](api-endpoint:Catalog-SearchCatalogItems) endpoint.
     */
    customAttributeFilters?: CustomAttributeFilter[];
    /**
     * Defines the values for the `archived_state` query expression
     * used in [SearchCatalogItems]($e/Catalog/SearchCatalogItems)
     * to return the archived, not archived or either type of catalog items.
     */
    archivedState?: string;
}
export declare const searchCatalogItemsRequestSchema: Schema<SearchCatalogItemsRequest>;
