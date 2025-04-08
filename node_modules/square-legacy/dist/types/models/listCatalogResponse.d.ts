import { Schema } from '../schema';
import { CatalogObject } from './catalogObject';
import { Error } from './error';
export interface ListCatalogResponse {
    /** Any errors that occurred during the request. */
    errors?: Error[];
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
     * See [Pagination](https://developer.squareup.com/docs/build-basics/common-api-patterns/pagination) for more information.
     */
    cursor?: string;
    /** The CatalogObjects returned. */
    objects?: CatalogObject[];
}
export declare const listCatalogResponseSchema: Schema<ListCatalogResponse>;
